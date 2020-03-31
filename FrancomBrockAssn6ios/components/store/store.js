import { createStore, combineReducers, applyMiddleware } from 'redux';
import markers from '../reducers/markers';
import logger from '../middleware/logger';
import storage from '../middleware/storage';

export default createStore(
  combineReducers({
    markers
  }),
  applyMiddleware(
    logger,
    storage,
  ),
);
