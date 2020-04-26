import * as Actions from '../actions';

const initialState = {}

const magazineReducers = function (state = initialState, action){
  switch (action.type) {
    case Actions.FEATURED_MAGAZINE:{
      return{
        ...state,
        featuredMagazineState: action.featuredMagazineData
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
