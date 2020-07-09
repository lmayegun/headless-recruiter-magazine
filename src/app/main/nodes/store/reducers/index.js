import {combineReducers} from 'redux';
import article from './article.reducers';
import news from './news.reducers';
import tags from './tags.reducers';
import knowledge from './knowledge.reducers';
import events from './events.reducers';
import taxonomy from './taxonomy.reducers';

const reducer = combineReducers({
  news,
  knowledge,
  events,
  taxonomy,
  tags
})

const articleReducer = combineReducers({
  article,
})

export {reducer, articleReducer};
