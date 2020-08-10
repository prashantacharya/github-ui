import { createStore } from 'redux';
import reducers from './reducers';

const environment = process.env.NODE_ENV;

const store = createStore(
  reducers,
  environment === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
