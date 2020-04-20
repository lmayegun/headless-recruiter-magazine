import { combineReducers } from 'redux';
import navigation from './navigation.reducer';

const createReducer = (asyncReducers)=>
  combineReducers({
    navigation,
    ...asyncReducers
  });

export default createReducer;
