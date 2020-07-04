export const SEARCH_RESPONSE = '[SEARCH] SEARCH_RESULTS';
export const SET_SEARCH_TEXT = '[SET SEARCH TEXT]';

export function initSearchRequest( text ){
  return {
    type   : SEARCH_RESPONSE,
    payload: text
  }
}


export function setSearchText(ev){
  return (dispatch) =>{
    dispatch({
      type: SET_SEARCH_TEXT,
      searchTextData: ev.target.value
    })
  }
}
