import { createStore, combineReducers, applyMiddleware } from 'redux';
import lists from '../reducers/add_list';
import logger from '../middleware/logger';

export default createStore(
  combineReducers({
    lists
  }),
  applyMiddleware(
    logger
  ),
);
