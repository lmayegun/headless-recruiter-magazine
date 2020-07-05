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

export function getTopRecentNews(payload){
  return {
    type : HOME_NEWS_TOP_RECENT,
    payload
  };
}

export function getFeaturedArticle(payload){
  return{
    type : HOME_FEATURED_ARTICLE,
    payload
  };
}

export function getArticleMostRecent(payload){
  return {
    type : HOME_ARTICLE_MOST_RECENT,
    payload
  };
}

export function getArticleMostPopular(payload){
  return {
    type : HOME_ARTICLE_MOST_POPULAR,
    payload
  };
}

export function getArticleSponsored(payload){
  return {
    type : HOME_ARTICLE_SPONSORED,
    payload
  };
}

export function getArticleProfiles(payload){
  return {
    type : HOME_ARTICLE_PROFILES,
    payload
  }
}

export function getOpinionTopThree(payload){
  return {
    type : HOME_OPINION_RECENT,
    payload
  };
}

export function getIndepthTopThree(payload){
  return {
    type : HOME_INDEPTH_RECENT,
    payload
  }
}

export function getLighterSideTopThree(payload){
  return {
    type : HOME_LIGHTERSIDE_RECENT,
    payload
  }
}

export function getEventsTopThree(payload){
  return {
    type : HOME_EVENTS_RECENT,
    payload
  };
}

export function getSupplements(payload){
  return {
    type : HOME_SUPPLEMENTS,
    payload
  };
}

export function getFeaturedMagazine(payload){
  return {
    type : HOME_FEATURED_MAGAZINE,
    payload
  };
}

export function getMagazineIssues(payload){
  return {
    type : HOME_MAGAZINE_ISSUES,
    payload
  }
}
