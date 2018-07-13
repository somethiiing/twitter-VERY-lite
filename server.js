const express = require('express');
const bp = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// config
const app = express();
mongoose.connect('mongodb://wilsonyu:password123@ds235411.mlab.com:35411/twitter-lite');
const db = mongoose.connection;
const port = 8080;
app.use(express.static(path.join(__dirname, 'build')))
  .use(bp.urlencoded({ extended: true }))
  .use(bp.json())
  .use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
db.on('error', console.error.bind(console, 'mongoose connection error:'));

const UserSchema = new mongoose.Schema({
  user: { type: String, required: true, unique: true },
  tweet: { type: String, required: false }
});
const UserDataModel = mongoose.model( 'userData', UserSchema );






// Routes:
app.get('/', (req, res) => {
  res.status(200);
  res.sendFile(path.join(__dirname, './build/index.html'));
});

// gets user if found, creates user if not found
app.get('/api/user/:user', (req, res) => {
  let { user } = req.params;
  UserDataModel.findOne({ user }, (err, data) => {
    if (err) console.log(err);
    if (!data) {
      let userData = new UserDataModel({
        user,
        tweet: 'This user has not sent a tweet yet. Send one for them!'
      });
      userData.save( (err, query) => {
        if (err) console.log('/api/user/', err);
        res.send({status: 'user created', data: query});
      });
    } else {
      res.send({ status: 'user found', data });
    }
  });
});

// update tweet
app.post('/api/update/', (req, res) => {
  let { user, tweet } = req.body;
  UserDataModel.findOneAndUpdate({ user }, { user, tweet }, { new: true }, (err, data) => {
    if (err) console.log('/api/update', err);
    res.send({ status: 'tweet updated', data });
  });
});

app.get('/api/all', (req, res) => {
  UserDataModel.find({}, (err, users) => {
    if (err) console.log('/api/all', err);
    res.send({ status: 'all users found', users });
  });
});

// clear database route
app.get('/api/delete/', (req, res) => {
  UserDataModel.remove( {}, (err, data) =>{
    if (err) console.log(err);
    res.send({ status: 'database cleared', data })
  });
})

app.listen(port, () => {
  console.log('Listening on port:' + port);
});;
