import * as Actions from '../actions';

const initialState = {}

const taxonomyReducers = function(state = initialState, action){
  switch (action.type) {
    case Actions.TAXONOMY:{
      return{
        ...state,
        taxonomyState: action.taxonomyData
      }
    }
    case Actions.NEWS_TERM_TOP_THREE:{
      return{
        ...state,
        termNewsTopThreeState: action.termNewsTopThreeData
      }
    }
    case Actions.NEWS_TERM_TOP_SIX:{
      return{
        ...state,
        termNewsTopSixState: action.termNewsTopSixData
      }
    }
    case Actions.SUPPLEMENTS:{
      return{
        ...state,
        supplementsState: action.supplementsData
      }
    }
    case Actions.NEWS_TERMS:{
      return{
        ...state,
        newsTermsState: action.newsTermsData
      }
    }
    case Actions.KNOWLEDGE_TERMS:{
      return{
        ...state,
        knowledgeTermsState: action.knowledgeTermsData
      }
    }
    case Actions.EVENTS_MOST_RECENT:{
      return{
        ...state,
        eventsMostRecentState: action.eventsMostRecentData
      }
    }
    default:{
      return state
    }
  }
}

export default taxonomyReducers;
