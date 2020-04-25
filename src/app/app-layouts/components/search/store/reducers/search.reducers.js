import * as Actions from '../actions';

const initialState = { searchTextState:'Search Text', searchResultsState: []}

const searchReducers = function (state = initialState, action){

  switch (action.type) {
    case Actions.SET_SEARCH_TEXT:{
      return{
        ...state,
        searchTextState: action.searchTextData
      }
    }
    case Actions.SEARCH_RESPONSE:{
      return{
        ...state,
        searchResultsState: action.searchData
      }
    }
    default:
    {
      return state
    }
  }
}

export default searchReducers;
