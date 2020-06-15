import {combineReducers} from 'redux';
import searchText from './search.reducers';

const searchReducer =  combineReducers({
      searchText
    });

export {searchReducer};
