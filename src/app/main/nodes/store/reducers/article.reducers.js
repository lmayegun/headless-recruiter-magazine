const initialState = {}

const contentReducers = function(state = initialState, action){
  switch (action.type) {
    case 'GET_CURRENT_ARTICLE_SUCCESS':{
      return{
        ...state,
        contentState: action.payload
      }
    }
    default:{
      return {
        ...state
      }
    }
  }
}

export default contentReducers;
