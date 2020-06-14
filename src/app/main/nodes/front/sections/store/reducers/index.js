import {combineReducers} from 'redux';
import home from './homepage.reducers';

const reducer = combineReducers({
  home,
})

const scrollReducer = combineReducers({

})

export {reducer, scrollReducer};
