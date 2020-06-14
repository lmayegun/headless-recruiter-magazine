export const CONTENT = '[CURRENT CONTENT]';

export function getContent(payload){
  return {
    type: CONTENT,
    payload
  }
}
