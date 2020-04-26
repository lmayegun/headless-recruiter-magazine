import axios from 'axios'

export const TAXONOMY = '[ALL VOCABULATY AND TERM] ALL';
export const SUPPLEMENTS = '[SUPPLEMENTS] ALL';
export const TERM_TOP_THREE = '[TERM TOP THREE] 3';
export const NEWS_TERM_TOP_THREE = '[TERM TOP THREE] 3';
export const NEWS_TERM_TOP_SIX = '[TERM TOP SIX] 6';
export const NEWS_TERMS = '[NEWS TERMS] NEWS TERMS';
export const KNOWLEDGE_TERMS = '[KNOWLEDGE TERMS] NEWS TERMS';
export const EVENTS_MOST_RECENT = '[EVENTS MOST RECENTS]';

export function getTaxonomy(){
  const request = axios.get('/api/taxonomy');
  return (dispatch) =>
    request.then(function(response){
      dispatch({
        type : TAXONOMY,
        taxonomyData: response.data
      })
    })
}

export function getSupplements(){
  const request = axios.get('https://recruiter.tsample.co.uk/supplements-carousel');
  return (dispatch) =>
    request.then(function(response){
      dispatch({
          type   :  SUPPLEMENTS,
          supplementsData: response.data
      })
    });
}

export function getTermTopThree(id){
  const request = axios.get('https://recruiter.tsample.co.uk/terms-top-three-json/'+id);
  return (dispatch) =>
    request.then(function(response){
      dispatch({
          type : NEWS_TERM_TOP_THREE,
          termNewsTopThreeData: response.data
      })
    });
}

export function getTermTopSix(id){
  const request = axios.get('https://recruiter.tsample.co.uk/terms-top-six-json/'+id);
  return (dispatch) =>
    request.then(function(response){
      dispatch({
          type : NEWS_TERM_TOP_SIX,
          termNewsTopSixData: response.data
      })
    });
}

export function getNewsTerms(){
  const request = axios.get('https://recruiter.tsample.co.uk/terms-list-by-vocabulary/6');
  return (dispatch) =>
    request.then(function(response){
      dispatch({
          type   :  NEWS_TERMS,
          newsTermsData: response.data
      })
    });
}

export function getKnowledgeTerms(){
  const request = axios.get('https://recruiter.tsample.co.uk/terms-list-by-vocabulary/2');
  return (dispatch) =>
    request.then(function(response){
      dispatch({
          type   :  KNOWLEDGE_TERMS,
          knowledgeTermsData: response.data
      })
    });
}

export function getEventsMostRecent(){
  const request = axios.get('https://recruiter.tsample.co.uk/events-most-recent-json');
  return (dispatch) =>
    request.then(function(response){
      dispatch({
        type   :  EVENTS_MOST_RECENT,
        eventsMostRecentData: response.data
      })
    });
}
