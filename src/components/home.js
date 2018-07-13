import React from 'react';
import { Tweet } from './';
import './home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    }

    this.renderTweets = this.renderTweets.bind(this);
  }

  componentDidMount() {
    fetch('/api/all')
      .then(res => res.json())
      .then(data => this.setState({ tweets: data.users }));
  }

  renderTweets(tweets) {
    return tweets.map((elem, idx) => {
      return (
        <div key={`tweet-${idx}`} className='tweetDiv'>
          <Tweet user={elem.user} tweet={elem.tweet} />
        </div>);
    });
  }

  render() {
    let { tweets } = this.state;
    console.log(this.state)
    return (
      <div className='home'>
        <div className='profile card'></div>
        <div className='tweets card'>
          {this.renderTweets(tweets)}
        </div>
        <div className='otherInfo card'></div>
      </div>
    );
  }
}

export default Home;