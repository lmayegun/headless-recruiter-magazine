import * as Actions from '../actions';

const initialState = {}

const contentReducers = function(state = initialState, action){
  switch (action.type) {
    case 'CURRENT_CONTENT_SUCCESS':{
      return{
        ...state,
        contentState: action.payload
      }
    }
    default:{
      return state
    }
  }
}

export default contentReducers;
