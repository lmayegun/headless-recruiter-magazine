export const TAGS_TOP_THREE = '[TAGS] TAGS_TOP_THREE';
export const TAGS_TOP_SIX = '[TAGS] TAGS_TOP_SIX';
export const TAG_TERMS = '[TAGS] TAG_TERMS';

export function getTagTerms(payload){
  return {
    type : TAG_TERMS,
    payload
  };
}

export function getTagsTopThree(payload){
  return {
    type : TAGS_TOP_THREE,
    payload
  };
}

export function getTagsTopSix(payload){
  return {
    type : TAGS_TOP_SIX,
    payload
  };
}
