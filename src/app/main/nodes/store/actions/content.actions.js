export const CONTENT = '[CURRENT CONTENT]';

export function getContent( id ){
  return {
    type: CONTENT,
    payload: id
  }
}
