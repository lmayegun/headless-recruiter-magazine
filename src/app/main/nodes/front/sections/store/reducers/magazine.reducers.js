import * as Actions from '../actions';

const initialState = {}

const magazineReducers = function (state = initialState, action){
  switch (action.type) {
    case 'HOME_FEATURED_MAGAZINE_SUCCESS':{
      return{
        ...state,
        featuredMagazineState: action.payload
      }
    }
    case 'MAGAZINE_ISSUE_SUCCESS':{
      return{
        ...state,
        magazineCarouselState: action.payload
      }
    }
    default:{
      return state
    }
  }
}

export default magazineReducers;
