import React from 'react';
import { Tweet } from './';
import './home.css';

let footerButtons = ['About', 'Help Center', 'Terms',
  'Privacy Policy', 'Cookies', 'Ads Info',
  'Brand', 'Blog', 'Status', 'Apps',
  'Jobs', 'Marketing', 'Businesses', 'Developers' ];

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    }

    this.renderTweets = this.renderTweets.bind(this);
    this.renderFooterButtons = this.renderFooterButtons.bind(this);
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
          <Tweet user={elem.user} tweet={elem.tweet} date={elem.date} />
        </div>);
    });
  }

  renderFooterButtons(arr) {
    return arr.map( (elem, idx) => {
      return (
        <button className='footer footerButton' key={`footer-${elem}`}>{elem}</button>
      )
    })
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
        <div className='otherInfo card'>
          <div className='footer footerText'>© 2018 Twitter-lite</div>
          {this.renderFooterButtons(footerButtons)}
        </div>
      </div>
    );
  }
}

export default Home;