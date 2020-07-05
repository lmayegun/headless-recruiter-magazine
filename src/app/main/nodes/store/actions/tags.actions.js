export const TAGS_TOP_THREE = '[TAGS] TAGS_TOP_THREE';
export const TAGS_TOP_SIX = '[TAGS] TAGS_TOP_SIX';

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
