import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Profile from '../components/Profile';
import { get } from '../utils/http';
import { setUser } from '../actions/users';

function ProfilePage({ profileProps, setData }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    get(`/users/${process.env.REACT_APP_USERNAME}`)
      .then((data) => {
        const { name, avatar_url, followers, following, location, login: username, twitter_username, blog, bio } = data;
        setData({ name, avatar_url, followers, following, location, username, twitter_username, blog, bio });
      })
      .then(() => {
        setLoading(false);
      });
  }, [setData]);

  return <>{loading ? <div className="profile">Loading</div> : <Profile {...profileProps} />}</>;
}

const mapStateToProps = (state) => {
  return { profileProps: state.user };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setData: (data) => {
      dispatch(setUser(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
