import { SET_REPOS } from '../actions/repos';

const INITIAL_STATE = ['Hello'];

const repos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_REPOS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default repos;
