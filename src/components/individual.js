import React from 'react';
import { postData } from '../Utilities';
import { withRouter } from 'react-router-dom';
import { Tweet } from './';
import './individual.css';

class Individual extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      tweet: '',
      date: new Date(),
      newTweet: ''
    }

    this.onNewTweetChange = this.onNewTweetChange.bind(this)
    this.newTweetSubmit = this.newTweetSubmit.bind(this);
  }

  componentDidMount() {
    let { user } = this.props.match.params
    fetch(`/api/user/${user}`)
      .then(res => res.json())
      .then(data => {
        let { user, tweet, date } = data.data;
        this.setState({ user, tweet, date });
      });
  }

  onNewTweetChange(e) {
    const { value } = e.target;
    this.setState({ newTweet: value });
  }

  newTweetSubmit() {
    const { user, newTweet } = this.state;
    let date = new Date();
    postData('/api/update/', { user, tweet: newTweet, date })
      .then(data => {
        this.setState({ tweet: data.data.tweet, newTweet: '' })})
      .catch(error => console.error(error));
  }

  render() {
    let { user, tweet, date, newTweet } = this.state;
    return (
      <div className='publicPage'>
        <div className='individualPageCard card'>
          <div className='individualTweetDiv'>
            <Tweet user={user} tweet={tweet} date={date} />
          </div>
          <div className='newTweet'>
            <input className='newTweetInput' type='text' value={newTweet} onChange={this.onNewTweetChange} />
            <button className='headerTweetButton' onClick={this.newTweetSubmit} >Send Tweet</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Individual);