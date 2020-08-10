import React from 'react';
import Repo from '../Repo';

function RepoList({ repoList }) {
  return (
    <ul>
      {repoList.map(({ name, description, language, id, stargazers_count, html_url }) => {
        const props = { name, description, language, stargazers_count, html_url };
        return <Repo {...props} />;
      })}
    </ul>
  );
}

export default RepoList;
