import axios from 'axios'

export const HOME_FEATURED_ARTICLE = '[HOME] FEATURED_ARTICLE';
export const HOME_ARTICLE_MOST_RECENT = '[HOME] ARTICLE_TOP_RECENT';
export const HOME_NEWS_TOP_RECENT = '[HOME] NEWS_TOP_THREE]';
export const ARTICLE_MOST_POPULAR = '[HOME] ARTICLE_MOST_POPULAR';
export const ARTICLE_SPONSORED = '[HOME] ARTICLE_SPONSORED';
export const ARTICLE_PROFILES = '[HOME] ARTICLE_PROFILES';
export const OPINION_TOP_THREE = '[HOME] OPINION_TOP_THREE';
export const INDEPTH_TOP_THREE = '[HOME] INDEPTH_TOP_THREE]';
export const LIGHTERSIDE_TOP_THREE = '[HOME] LIGHTER_TOP_THREE]';
export const EVENTS_TOP_THREE = '[HOME] EVENTS_TOP_THREE';
export const A_CONTENT = '[GET A CONTENT] BY ID';

const baseUrl = true ? 'http://recruiter.dd:8083' : 'https://recruiter.tsample.co.uk';


export function getTopRecentNews(){
  return {type : HOME_NEWS_TOP_RECENT }
}

export function getFeaturedArticle(){
  return{ type : HOME_FEATURED_ARTICLE }
}

export function getArticleMostRecent(){
  return {type : HOME_ARTICLE_MOST_RECENT}
}

export function getArticleMostPopular(){
  const request = axios.get(baseUrl + '/article-most-popular-six');
  return (dispatch) =>
    request.then(function(response){
      dispatch({
          type   :  ARTICLE_MOST_POPULAR,
          articleMostPopularData: response.data
      })
    });
}

export function getArticleSponsored(){
  const request = axios.get(baseUrl + '/sponsored-article');
  return (dispatch) =>
    request.then(function(response){
      dispatch({
          type   :  ARTICLE_SPONSORED,
          articleSponsoredData: response.data
      })
    });
}

export function getArticleProfiles(){
  const request = axios.get(baseUrl + '/article-profiles');
  return (dispatch) =>
    request.then(function(response){
      dispatch({
          type   :  ARTICLE_PROFILES,
          articleProfilesData: response.data
      })
    });
}

export function getOpinionTopThree(){
  const request = axios.get(baseUrl + '/opinion-top-three');
  return (dispatch) =>
    request.then(function(response){
      dispatch({
          type   :  OPINION_TOP_THREE,
          opinionTopThreeData: response.data
      })
    });
}

export function getIndepthTopThree(){
  const request = axios.get(baseUrl + '/indepth-top-three');
  return (dispatch) =>
    request.then(function(response){
      dispatch({
        type   :  INDEPTH_TOP_THREE,
        indepthTopThreeData: response.data
      })
    });
}

export function getLighterSideTopThree(){
  const request = axios.get(baseUrl + '/lighterside-top-three');
  return (dispatch) =>
    request.then(function(response){
      dispatch({
        type   :  LIGHTERSIDE_TOP_THREE,
        lighterSideTopThreeData: response.data
      })
    });
}

export function getEventsTopThree(){
  const request = axios.get(baseUrl + '/event-top-three-json');
  return (dispatch) =>
    request.then(function(response){
      dispatch({
        type   :  EVENTS_TOP_THREE,
        eventsTopThreeData: response.data
      })
    });
}
