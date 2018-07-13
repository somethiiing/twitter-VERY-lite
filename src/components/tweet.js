import React from 'react';
import './tweet.css';

const Tweet = (props) => {
  const tempProfilePic = 'https://norsis.no/wp-content/uploads/2018/05/twitter.jpg';
  const tempDate = '13 Jul';
  let { user, tweet, date } = props;

  const renderDate = (date) => {
    if (date === undefined) {
      return 'no date';
    } else {
      let tempDate = new Date(date);
      const year = tempDate.getFullYear();
      const month = tempDate.getMonth();
      const day = tempDate.getDate();
      const hour = tempDate.getHours();
      const minute = tempDate.getMinutes();
      const second = tempDate.getSeconds();
      return `${month}-${day}-${year} at ${hour}:${minute}:${second}`;
    }
  }

  return (
    <div className='tweet'>
      <div className='profilePicBar'>
        <img className='profilePic' src={tempProfilePic}  />
      </div>
      <div className='tweetArea'>
        <div className='tweetUser'>{`@${user}`}</div>
        <div className='tweetText'>{`"${tweet}"`}</div>
        <div className='tweetDate'>{renderDate(date)}</div>
      </div>
    </div>
  );

};

export default Tweet;