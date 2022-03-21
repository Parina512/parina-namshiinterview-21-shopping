import { combineReducers } from 'redux';
import itemReducer from './item-reducer';

const rootReducer = combineReducers({
  item: itemReducer,
});

export default rootReducer;
