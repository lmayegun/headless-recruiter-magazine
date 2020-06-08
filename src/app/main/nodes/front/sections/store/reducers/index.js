import {combineReducers} from 'redux';
import home from './homepage.reducers';
import content from './content.reducers';
import news from './news.reducers';

const reducer = combineReducers({
  content,
  home,
})

const scrollReducer = combineReducers({
  news,
})

export {reducer, scrollReducer};
