import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHome, faBolt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faBell } from '@fortawesome/free-regular-svg-icons';
import './header.css';

const tempProfilePic = 'https://vignette.wikia.nocookie.net/bungostraydogs/images/1/1e/Profile-icon-9.png/revision/latest/scale-to-width-down/480?cb=20171030104015';

const header = (props) => {
  return (
    <div className='header'>
      <div className='headerContent'>
        <div className='headerButtons'>
          <button className='headerTabButton' ><FontAwesomeIcon className='headerTabButtonIcon' icon={faHome} />Home</button>
          <button className='headerTabButton' ><FontAwesomeIcon className='headerTabButtonIcon' icon={faBolt} />Moments</button>
          <button className='headerTabButton' ><FontAwesomeIcon className='headerTabButtonIcon' icon={faBell} />Notifications</button>
          <button className='headerTabButton' ><FontAwesomeIcon className='headerTabButtonIcon' icon={faEnvelope} />Messages</button>
        </div>
        <div className='headerLogo'><FontAwesomeIcon size='2x' icon={faTwitter} /></div>
        <div className='headerSearch'>
          <input className='searchbar' type='text' placeholder='Search Twitter    🔍' />
          <img className='headerProfilePic' src={tempProfilePic} />
          <button className='headerTweetButton' >Tweet</button>
        </div>
      </div>
    </div>
  )
}

export default header;