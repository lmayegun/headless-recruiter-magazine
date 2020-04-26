import * as Actions from '../actions';

const initialState = {}

const contentReducers = function (state = initialState, action){

  switch (action.type) {
    case Actions.ALL_CONTENTS:{
      return {
        ...state,
        contentsState : action.contentsData
      };
    }
    case Actions.FEATURED_ARTICLE:{
      return {
        ...state,
        featuredArticleState : action.featureArtcleData
      };
    }
    case Actions.ARTICLE_MOST_RECENT:{
      return {
        ...state,
        articleMostRecentState : action.articleMostRecentData
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
    case Actions.NEWS_TOP_RECENT:{
      return {
        ...state,
        newsTopRecentState : action.topRecentNewsData,
      };
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
