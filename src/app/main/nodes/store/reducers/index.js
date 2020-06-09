import {combineReducers} from 'redux';
import content from './content.reducers';
import news from './news.reducers';
import taxonomy from './taxonomy.reducers';

const reducer = combineReducers({
  content,
  taxonomy,
  news,
})

export {reducer};
