import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { setRepos } from '../actions/repos';
import RepoList from '../components/RepoList/RepoList';
import { get } from '../utils/http';

function RepoPage({ repos, setData }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    get(`/users/${process.env.REACT_APP_USERNAME}/repos?sort=updated`)
      .then((data) => {
        setData(data);
      })
      .then(() => {
        setLoading(false);
      });
  }, [setData]);

  console.log(repos);
  return (
    <div className="repo-page">
      <h1>Repositories</h1>

      {loading ? <div>Loading</div> : <RepoList repoList={repos} />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { repos: state.repos };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setData: (data) => {
      dispatch(setRepos(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoPage);
