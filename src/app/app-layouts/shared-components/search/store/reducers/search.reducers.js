import * as Actions from '../actions';

const initialState = { searchTextState:'', searchResultsState: []}

const searchReducers = function (state = initialState, action){

  switch (action.type) {
    case Actions.SET_SEARCH_TEXT:{
      return{
        ...state,
        searchTextState: action.searchTextData
      }
    }
    case 'SEARCH_RESULTS_SUCCESS':{
      return{
        ...state,
        searchResultsState: action.payload
      }
    }
    default:
    {
      return state
    }
  }
}

export default searchReducers;
