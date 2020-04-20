import {combineReducers} from 'redux';
import contents from './contents.reducers';
import content from './content.reducers';
import news from './news.reducers';
import taxonomy from './taxonomy.reducers';
import magazine from './magazine.reducers';

const reducer = combineReducers({
  content, 
  contents,
  taxonomy,
  magazine
})

const scrollReducer = combineReducers({
  news,
})

export {reducer, scrollReducer};
