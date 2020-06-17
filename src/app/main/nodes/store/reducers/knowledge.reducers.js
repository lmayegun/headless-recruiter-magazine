import * as Actions from '../actions';

const initialState = {}

const knowledgeReducers = function (state = initialState, action){

  switch (action.type) {
    case 'KNOWLEDGE_TERMS_SUCCESS':{
      return{
        ...state,
        knowledgeTermsState: action.payload
      }
    }
    case 'KNOWLEDGE_TOP_THREE_SUCCESS':{
      return{
        ...state,
        knowledgeTopThreeState: action.payload
      }
    }
    case 'KNOWLEDGE_TOP_SIX_SUCCESS':{
      return{
        ...state,
        knowledgeTopSixState: action.payload
      }
    }
    default:
    {
      return state
    }
  }
}

export default knowledgeReducers;
