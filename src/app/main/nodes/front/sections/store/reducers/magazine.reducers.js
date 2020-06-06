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
    case Actions.MAGAZINE_ISSUES_CAROUSEL:{
      return{
        ...state,
        magazineCarouselState: action.magazineCarouselData
      }
    }
    default:{
      return state
    }
  }
}

export default magazineReducers;
