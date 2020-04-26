import axios from 'axios'

export const FEATURED_MAGAZINE        = '[FEATURED MAGAZINE] FEATURED_MAGAZINE';
export const MAGAZINE_ISSUES_CAROUSEL = '[MAGAZINE ISSUE CAROUSEL] MAGAZINE ISSUES CAROUSEL';

export function getFeaturedMagazine(){
  const request = axios.get('https://recruiter.tsample.co.uk/featured-magazine');
  return (dispatch) =>
    request.then(function(response){
      dispatch({
          type   :  FEATURED_MAGAZINE,
          featuredMagazineData: response.data
      })
    });
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
