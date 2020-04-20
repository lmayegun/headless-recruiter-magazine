import { combineReducers } from 'redux';
import todoApp from './example.reducer';
import navigation from './navigation.reducer';

const createReducer = (asyncReducers)=>
  combineReducers({
    todoApp,
    navigation,
    ...asyncReducers
  });

export default createReducer;
