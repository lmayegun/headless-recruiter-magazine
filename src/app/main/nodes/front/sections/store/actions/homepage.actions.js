import axios from 'axios'

export const HOME_FEATURED_ARTICLE = '[HOME] FEATURED_ARTICLE';
export const HOME_ARTICLE_MOST_RECENT = '[HOME] ARTICLE_TOP_RECENT';
export const HOME_NEWS_TOP_RECENT = '[HOME] NEWS_TOP_THREE]';
export const HOME_ARTICLE_MOST_POPULAR = '[HOME] ARTICLE_MOST_POPULAR';
export const HOME_ARTICLE_SPONSORED = '[HOME] ARTICLE_SPONSORED';
export const HOME_ARTICLE_PROFILES = '[HOME] ARTICLE_PROFILES';
export const HOME_OPINION_RECENT = '[HOME] OPINION_RECENT';
export const HOME_INDEPTH_RECENT = '[HOME] INDEPTH_RECENT';
export const HOME_LIGHTERSIDE_RECENT = '[HOME] LIGHTER_RECENT';
export const HOME_EVENTS_RECENT = '[HOME] EVENTS_RECENT';
export const HOME_SUPPLEMENTS = '[HOME] SUPPLEMENTS';
export const HOME_FEATURED_MAGAZINE   = '[HOME] FEATURED_MAGAZINE';
export const HOME_MAGAZINE_ISSUES = '[HOME] MAGAZINE_ISSUES';
export const A_CONTENT = '[GET A CONTENT] BY ID';

const baseUrl = true ? 'http://recruiter.dd:8083' : 'https://recruiter.tsample.co.uk';


export function getTopRecentNews(){
  return {type : HOME_NEWS_TOP_RECENT };
}

export function getFeaturedArticle(){
  return{ type : HOME_FEATURED_ARTICLE };
}

export function getArticleMostRecent(){
  return {type : HOME_ARTICLE_MOST_RECENT};
}

export function getArticleMostPopular(){
  return {type : HOME_ARTICLE_MOST_POPULAR};
}

export function getArticleSponsored(){
  return {type   :  HOME_ARTICLE_SPONSORED};
}

export function getArticleProfiles(){
  return {type : HOME_ARTICLE_PROFILES}
}

export function getOpinionTopThree(){
  return {type : HOME_OPINION_RECENT};
}

export function getIndepthTopThree(){
  return {type : HOME_INDEPTH_RECENT}
}

export function getLighterSideTopThree(){
  return {type : HOME_LIGHTERSIDE_RECENT}
}

export function getEventsTopThree(){
  return {type : HOME_EVENTS_RECENT};
}

export function getSupplements(){
  return {type : HOME_SUPPLEMENTS};
}

export function getFeaturedMagazine(){
  return {type : HOME_FEATURED_MAGAZINE};
}

export function getMagazineIssues(){
  return {type : HOME_MAGAZINE_ISSUES}
}
