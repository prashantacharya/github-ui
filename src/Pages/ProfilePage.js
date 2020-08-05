import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Profile from '../components/Profile';

function ProfilePage(props) {
  const profileProps = {
    name: 'Prashant Acharya',
    avatar_url: 'https://avatars3.githubusercontent.com/u/23692097?v=4',
    followers: 30,
    following: 40,
    location: 'Kathmandu',
    username: 'prashantacharya',
    twitter_username: 'dev_prashaant',
    blog: 'https://prashantacharya.github.io'
  };
  const loading = true;

  const fetchData = () => {};

  useEffect(() => {}, []);

  return <>{loading ? <div>Loading</div> : <Profile {...profileProps} />}</>;
}

const mapStateToProps = (state) => {
  console.log(state);
  return state;
};

const mapDispatchToProps = () => {
  return {
    setData: (val) => {}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
