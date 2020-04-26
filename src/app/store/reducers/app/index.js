import { combineReducers } from 'redux';
import navigation from './navigation.reducer';
import navigationTerm from './navigationTerm.reducer';

const createReducer = (asyncReducers)=>
  combineReducers({
    navigation,
    navigationTerm,
    ...asyncReducers
  });

export default createReducer;
