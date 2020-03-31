import { createStore, combineReducers, applyMiddleware } from 'redux';
import lists from '../reducers/lists';
import logger from '../middleware/logger';
import storage from '../middleware/storage';

export default createStore(
  combineReducers({
    lists
  }),
  applyMiddleware(
    logger,
    storage,
  ),
);
