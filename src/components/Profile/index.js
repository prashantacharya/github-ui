import React from 'react';

import { GiWorld } from 'react-icons/gi';
import { FaTwitter } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { AiFillGithub } from 'react-icons/ai';

import './profile.css';

function Profile(props) {
  return (
    <div className="profile">
      <div className="profile__image">
        <img src={props.avatar_url} alt={props.name} />
      </div>

      <div className="profile__basic-info">
        <h2>
          <AiFillGithub className="profile__icons" />{' '}
          <a href={`https://github.com/${props.username}`} target="_blank" rel="noopener noreferrer">
            {props.username}
          </a>
        </h2>
        <div className="profile__name">{props.name}</div>
        <div className="profile__location">
          <GoLocation className="profile__icons" /> {props.location}
        </div>
      </div>

      <p className="profile__bio">{props.bio}</p>

      <div className="profile__follow-info">
        <div className="profile__followers">
          <h3>40</h3>
          <p>Followers</p>
        </div>
        <div className="profile__following">
          <h3>36</h3>
          <p>Following</p>
        </div>
      </div>

      <div className="profile__online-presence">
        <a href={`https://twitter.com/${props.twitter_username}`} target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>

        <a href={`${props.blog}`} target="_blank" rel="noopener noreferrer">
          <GiWorld />
        </a>
      </div>
    </div>
  );
}

export default Profile;
