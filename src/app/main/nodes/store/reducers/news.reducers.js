const initialState = {}

const newsReducers = function (state = initialState, action){

  switch (action.type) {
    case 'NEWS_TERMS_SUCCESS':{
      return{
        ...state,
        newsTermsState: action.payload
      }
    }
    case 'NEWS_TOP_THREE_SUCCESS':{
      return{
        ...state,
        newsTopThreeState: action.payload
      }
    }
    case 'NEWS_TOP_SIX_SUCCESS':{
      return{
        ...state,
        newsTopSixState: action.payload
      }
    }
    default:
    {
      return state
    }
  }
}

export default newsReducers;
