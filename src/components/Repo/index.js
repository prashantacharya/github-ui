import React from 'react';

import { AiFillStar, AiOutlineLink } from 'react-icons/ai';

import './repo.css';

function Repo({ name, description, language, stargazers_count, html_url }) {
  return (
    <li className="repo__card">
      <h2>{name}</h2>
      <p className="repo__description">{description}</p>
      <p className="repo__made-with">
        <span>Made with: </span> {language}
      </p>
      <div className="repo__stars-link">
        <p>
          <AiFillStar /> {stargazers_count}
        </p>
        <p>
          <AiOutlineLink />{' '}
          <a href={html_url} target="_blank" rel="noopener noreferrer">
            View repository
          </a>
        </p>
      </div>
    </li>
  );
}

export default Repo;
