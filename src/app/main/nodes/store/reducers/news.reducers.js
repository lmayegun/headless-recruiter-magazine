import * as Actions from '../actions';

const initialState = {}

const newsReducers = function (state = initialState, action){

  switch (action.type) {
    case Actions.SCROLL_Y_END:{
      return{
        ...state,
        frontLoadMoreState: action.frontScrollYEnd
      }
    }
    default:
    {
      return state
    }
  }
}

export default newsReducers;
