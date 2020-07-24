import {createStore, compose, applyMiddleware} from 'redux';

import reducers from './ducks';
const middlewares = [];

const composer = __DEV__
  ? compose(
      applyMiddleware(...middlewares),
      console.tron.createEnhancer(),
    )
  : compose(applyMiddleware(...middlewares));

const store = createStore(reducers, composer);

export default store;
