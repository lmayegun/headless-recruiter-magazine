export const SCROLL_Y_END = '[SCROLL Y END] SCROLLEN TO Y END';

export function loadMoreFrontContent( value ){

  return ( dispatch )=> dispatch({
    type: SCROLL_Y_END,
    frontScrollYEnd: value
  })
}
