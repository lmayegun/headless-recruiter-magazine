import * as Actions from '../../actions/app/index';

const initialState = {mine:'gracie'}
const todoApp = function (state = initialState, action) {
  switch (action.type) {
    case Actions.ADD_TEXT:
    {
      return {
        ...state,
        mine:action.payload
      }
    }
    default:{
      return state;
    }
  }
}

export default todoApp;
