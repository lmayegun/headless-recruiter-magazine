import axios from 'axios'

export const FEATURED_ARTICLE = '[FEATURED ARTICLE] FEATURED_ARTICLE';
export const NEWS_TOP_RECENT = '[NEWS CONTENT TYPE TOP THREE]';
export const ARTICLE_MOST_RECENT = '[ARTICLE TOP RECENT]';
export const ARTICLE_MOST_POPULAR = '[ARTICLE MOST POPULAR]';
export const ARTICLE_SPONSORED = '[ARTICLE SPONSORED]';
export const ARTICLE_PROFILES = '[ARTICLE PROFILES]';
export const OPINION_TOP_THREE = '[OPINION TOP THREE]';
export const INDEPTH_TOP_THREE = '[INDEPTH TOP THREE]';
export const LIGHTERSIDE_TOP_THREE = '[LIGHTER TOP THREE]';
export const EVENTS_TOP_THREE = '[EVENTS TOP THREE]';

export const ALL_CONTENTS = '[ALL CONTENT TYPE] ALL_CONTENTS';
export const A_CONTENT = '[GET A CONTENT] BY ID';

export function getTopRecentNews(){
  const request = axios.get('https://recruiter.tsample.co.uk/news-recent-top-four');
  return (dispatch) =>
    request.then(function(response){
      dispatch({
          type   :  NEWS_TOP_RECENT,
          topRecentNewsData: response.data
      })
    });
}

export function getFeaturedArticle(){
  const request = axios.get('https://recruiter.tsample.co.uk/feature-article');
  return (dispatch) =>
    request.then(function(response){
      dispatch({
          type   :  FEATURED_ARTICLE,
          featureArtcleData: response.data
      })
    });
}

export function getArticleMostRecent(){
  const request = axios.get('https://recruiter.tsample.co.uk/article-most-recent');
  return (dispatch) =>
    request.then(function(response){
      dispatch({
          type   :  ARTICLE_MOST_RECENT,
          articleMostRecentData: response.data
      })
    });
}

export function getArticleMostPopular(){
  const request = axios.get('https://recruiter.tsample.co.uk/article-most-popular-six');
  return (dispatch) =>
    request.then(function(response){
      dispatch({
          type   :  ARTICLE_MOST_POPULAR,
          articleMostPopularData: response.data
      })
    });
}

export function getArticleSponsored(){
  const request = axios.get('https://recruiter.tsample.co.uk/sponsored-article');
  return (dispatch) =>
    request.then(function(response){
      dispatch({
          type   :  ARTICLE_SPONSORED,
          articleSponsoredData: response.data
      })
    });
}

export function getArticleProfiles(){
  const request = axios.get('https://recruiter.tsample.co.uk/article-profiles');
  return (dispatch) =>
    request.then(function(response){
      dispatch({
          type   :  ARTICLE_PROFILES,
          articleProfilesData: response.data
      })
    });
}

export function getOpinionTopThree(){
  const request = axios.get('https://recruiter.tsample.co.uk/opinion-top-three');
  return (dispatch) =>
    request.then(function(response){
      dispatch({
          type   :  OPINION_TOP_THREE,
          opinionTopThreeData: response.data
      })
    });
}

export function getIndepthTopThree(){
  const request = axios.get('https://recruiter.tsample.co.uk/indepth-top-three');
  return (dispatch) =>
    request.then(function(response){
      dispatch({
        type   :  INDEPTH_TOP_THREE,
        indepthTopThreeData: response.data
      })
    });
}

export function getLighterSideTopThree(){
  const request = axios.get('https://recruiter.tsample.co.uk/lighterside-top-three');
  return (dispatch) =>
    request.then(function(response){
      dispatch({
        type   :  LIGHTERSIDE_TOP_THREE,
        lighterSideTopThreeData: response.data
      })
    });
}

export function getEventsTopThree(){
  const request = axios.get('https://recruiter.tsample.co.uk/event-top-three-json');
  return (dispatch) =>
    request.then(function(response){
      dispatch({
        type   :  EVENTS_TOP_THREE,
        eventsTopThreeData: response.data
      })
    });
}

export function getContents(){
  const request = axios.get('/api/news');
  return (dispatch) =>
    request.then(function(response){
      // console.log(response, 'rara')
      dispatch({
          type   : ALL_CONTENTS,
          contentsData: response.data
      })
    });
}

// export function getFeaturedContents(){
//   const params = {featured:true}
//   const request = axios.get('/api/news', {params});
//     return (dispatch) =>
//       request.then(function(response){
//         // console.log(response, 'rara')
//         dispatch({
//             type   : FEATURED_CONTENTS,
//             newsData: response.data
//         })
//       });
// }
