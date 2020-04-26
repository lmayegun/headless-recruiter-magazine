import * as Actions from '../actions';

const initialState = {}

const contentReducers = function(state = initialState, action){
  switch (action.type) {
    case Actions.CONTENT:{
      return{
        ...state,
        contentState: action.contentData
      }
    }
    default:{
      return state
    }
  }
}

export default contentReducers;
