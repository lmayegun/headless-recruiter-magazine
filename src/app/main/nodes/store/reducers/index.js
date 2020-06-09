import {combineReducers} from 'redux';
import content from './content.reducers';
import news from './news.reducers';
import taxonomy from './taxonomy.reducers';
import magazine from './magazine.reducers';

const reducer = combineReducers({
  content,
  taxonomy,
  magazine,
  news,
})

export {reducer};
