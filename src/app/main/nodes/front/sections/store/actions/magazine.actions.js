import axios from 'axios'

export const FEATURED_MAGAZINE        = '[HOME] FEATURED_MAGAZINE';
export const MAGAZINE_ISSUES_CAROUSEL = '[MAGAZINE ISSUE CAROUSEL] MAGAZINE ISSUES CAROUSEL';

export function getFeaturedMagazine(){
  return {type : FEATURED_MAGAZINE}
}

export function getMagazineIssueCarousel(){
  const request = axios.get('https://recruiter.tsample.co.uk/magazine-issues-carousel');
  return (dispatch) =>
    request.then(function(response){
      dispatch({
          type   :  MAGAZINE_ISSUES_CAROUSEL,
          magazineCarouselData: response.data
      })
    });
}
