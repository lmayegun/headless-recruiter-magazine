import * as Actions from '../actions';

const initialState = {}

const homepageReducers = function (state = initialState, action){

  switch (action.type) {
    case 'HOME_FEATURED_ARTICLE_NEWS_SUCCESS':{
      return {
        ...state,
        featuredArticleState : action.payload
      };
    }
    case 'HOME_ARTICLE_TOP_RECENT_SUCCESS':{
      return {
        ...state,
        articleMostRecentState : action.payload
      };
    }
    case 'HOME_NEWS_TOP_THREE_SUCCESS':{
      return {
        ...state,
        newsTopRecentState : action.payload,
      };
    }
    case 'HOME_ARTICLE_MOST_POPULAR_SUCCESS':{
      return {
        ...state,
        articleMostPopularState : action.payload
      };
    }
    case 'HOME_ARTICLE_SPONSORED_SUCCESS':{
      return {
        ...state,
        articleSponsoredState : action.payload
      };
    }
    case 'HOME_ARTICLE_POFILES_SUCCESS':{
      return {
        ...state,
        articleProfilesState : action.payload,
      };
    }
    case 'HOME_OPINION_RECENT_SUCCESS':{
      return {
        ...state,
        opinionTopThreeState : action.payload,
      };
    }
    case 'HOME_INDEPTH_RECENT_SUCCESS':{
      return {
        ...state,
        indepthTopThreeState : action.payload,
      };
    }
    case 'HOME_LIGHTERSIDE_RECENT_SUCCESS':{
      return {
        ...state,
        lighterSideTopThreeState : action.payload,
      };
    }
    case 'HOME_EVENTS_RECENT_SUCCESS':{
      return {
        ...state,
        eventsTopThreeState : action.payload,
      };
    }
    case Actions.A_CONTENT:{
      return{
        ...state,
        anArticleState: action.articleData
      }
    }
    default:
    {
      return state
    }
  }
}

export default homepageReducers;
