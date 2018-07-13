import React from 'react';
import './tweet.css';

const Tweet = (props) => {
  const tempProfilePic = 'https://norsis.no/wp-content/uploads/2018/05/twitter.jpg';
  const tempDate = '13 Jul';
  let { user, tweet } = props;

  return (
    <div className='tweet'>
      <div className='profilePicBar'>
        <img className='profilePic' src={tempProfilePic}  />
      </div>
      <div className='tweetArea'>
        <div className='tweetUser'>{`@${user}`}</div>
        <div className='tweetText'>{`"${tweet}"`}</div>
        <div className='tweetDate'>{tempDate}</div>
      </div>
    </div>
  );

};

export default Tweet;