const initialState = {}

const eventsReducers = function (state = initialState, action){

  switch (action.type) {
    case 'EVENTS_TOP_THREE_SUCCESS':{
      return{
        ...state,
        eventsTopThreeState: action.payload
      }
    }
    case 'EVENTS_TOP_SIX_SUCCESS':{
      return{
        ...state,
        eventsTopSixState: action.payload
      }
    }
    default:
    {
      return state
    }
  }
}

export default eventsReducers;
