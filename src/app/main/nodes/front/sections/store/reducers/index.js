import {combineReducers} from 'redux';
import home from './homepage.reducers';
import content from './content.reducers';
import news from './news.reducers';
import taxonomy from './taxonomy.reducers';
import magazine from './magazine.reducers';

const reducer = combineReducers({
  content,
  home,
  taxonomy,
  magazine
})

const scrollReducer = combineReducers({
  news,
})

export {reducer, scrollReducer};
