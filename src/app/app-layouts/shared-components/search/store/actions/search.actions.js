import axios from 'axios';

export const SEARCH_RESPONSE = '[SEARCH] SEARCH_RESULTS';
export const SET_SEARCH_TEXT = '[SET SEARCH TEXT]';

export function initSearchRequest( text ){
  return {
    type   : SEARCH_RESPONSE,
    payload: text
  }
  // const request = axios.get('https://recruiter.tsample.co.uk/search-page-2?keys='+ ev +'&sort_by=title&sort_order=DESC');
  // return (dispatch) =>
  //   request.then(function(response){
  //     // console.log(response.data.nodes, "Search Response");
  //     dispatch({
  //       type   :  SEARCH_RESPONSE,
  //       searchData: response.data
  //     })
  //   });
}


export function setSearchText(ev){
  return (dispatch) =>{
    // alert(ev.target.value)
    dispatch({
      type: SET_SEARCH_TEXT,
      searchTextData: ev.target.value
    })
  }
}
