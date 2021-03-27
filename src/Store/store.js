import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './Reducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = () => {
  return (next) => (action) => {
    console.log('dispatch - ', action);
    return next(action);
  };
}

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk)),
);

export default store;