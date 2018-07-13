import React from 'react';
import { postData } from '../Utilities';
import { withRouter } from 'react-router-dom';

class Individual extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      tweet: '',
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
        let { user, tweet } = data.data;
        this.setState({ user, tweet })
      });
  }

  onNewTweetChange(e) {
    const { value } = e.target;
    this.setState({ newTweet: value });
  }

  newTweetSubmit() {
    const { user, newTweet } = this.state;
    postData('/api/update/', { user, tweet: newTweet })
      .then(data => this.setState({ tweet: data.data.tweet, newTweet: '' }))
      .catch(error => console.error(error));
  }

  render() {
    let { user, tweet, newTweet } = this.state;
    return (
      <div>
        Individual!!!
        <br/>
        {user}
        <br/>
        {tweet}
        <br/>
        <br/>
        <br/>
        <input type='text' value={newTweet} onChange={this.onNewTweetChange} />
        <button onClick={this.newTweetSubmit} >Send Tweet</button>
      </div>
    );
  }
}

export default withRouter(Individual);