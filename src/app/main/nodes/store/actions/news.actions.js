export const NEWS_TERMS = '[NEWS TERMS] NEWS_TERMS';
export const NEWS_TOP_THREE = '[NEWS] NEWS_TOP_THREE';
export const NEWS_TOP_SIX = '[NEWS] NEWS_TOP_SIX';

export function getNewsTerms(){
  return {type : NEWS_TERMS};
}

export function getNewsTopThree(payload){
  return {
    type : NEWS_TOP_THREE,
    payload
  };
}

export function getNewsTopSix(payload){
  return {
    type : NEWS_TOP_SIX,
    payload
  };
}
