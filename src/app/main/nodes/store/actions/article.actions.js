export const ARTICLE = '[CURRENT ARTICLE]';

export function getArticle(payload){
  return {
    type: ARTICLE,
    payload
  }
}
