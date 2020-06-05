import * as Actions from '../actions';

const initialState = {}

const contentReducers = function (state = initialState, action){

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
    case Actions.ARTICLE_MOST_POPULAR:{
      return {
        ...state,
        articleMostPopularState : action.articleMostPopularData
      };
    }
    case Actions.ARTICLE_SPONSORED:{
      return {
        ...state,
        articleSponsoredState : action.articleSponsoredData
      };
    }
    case Actions.A_CONTENT:{
      return{
        ...state,
        anArticleState: action.articleData
      }
    }
    case Actions.ARTICLE_PROFILES:{
      return {
        ...state,
        articleProfilesState : action.articleProfilesData,
      };
    }
    case Actions.OPINION_TOP_THREE:{
      return {
        ...state,
        opinionTopThreeState : action.opinionTopThreeData,
      };
    }
    case Actions.INDEPTH_TOP_THREE:{
      return {
        ...state,
        indepthTopThreeState : action.indepthTopThreeData,
      };
    }
    case Actions.LIGHTERSIDE_TOP_THREE:{
      return {
        ...state,
        lighterSideTopThreeState : action.lighterSideTopThreeData,
      };
    }
    case Actions.EVENTS_TOP_THREE:{
      return {
        ...state,
        eventsTopThreeState : action.eventsTopThreeData,
      };
    }
    default:
    {
      return state
    }
  }
}

export default contentReducers;
