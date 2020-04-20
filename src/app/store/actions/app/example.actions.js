export const ADD_TEXT = '[ADD_TEXT] Add Text';

export function addTodoText( text ){
  return {
    type: ADD_TEXT,
    payload: text
  }
}
