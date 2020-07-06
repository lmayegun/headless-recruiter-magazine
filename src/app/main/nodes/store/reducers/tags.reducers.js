const initialState = {}

const tagsReducers = function (state = initialState, action){

  switch (action.type) {
    case 'TAGS_TOP_THREE_SUCCESS':{
      return{
        ...state,
        tagsTopThreeState: action.payload
      }
    }
    case 'TAGS_TOP_SIX_SUCCESS':{
      return{
        ...state,
        tagsTopSixState: action.payload
      }
    }
    case 'TAG_TERMS_SUCCESS':{
      return{
        ...state,
        tagsTermsState: action.payload
      }
    }
    default:
    {
      return state
    }
  }
}

export default tagsReducers;
