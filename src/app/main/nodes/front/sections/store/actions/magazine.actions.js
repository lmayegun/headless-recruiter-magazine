import axios from 'axios'

export const HOME_FEATURED_MAGAZINE   = '[HOME] FEATURED_MAGAZINE';
export const MAGAZINE_ISSUES_CAROUSEL = '[MAGAZINE ISSUE CAROUSEL] MAGAZINE ISSUES CAROUSEL';

export function getFeaturedMagazine(){
  return {type : HOME_FEATURED_MAGAZINE};
}

export function getMagazineIssueCarousel(){
  return {type : MAGAZINE_ISSUES_CAROUSEL}
}
