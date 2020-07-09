export const EVENTS_TOP_THREE = '[EVENTS] EVENTS_TOP_THREE';
export const EVENTS_TOP_SIX = '[EVENTS] EVENTS_TOP_SIX';

export function getEventsTopThree(){
  return {type : EVENTS_TOP_THREE};
}

export function getEventsTopSix(){
  return {type : EVENTS_TOP_SIX};
}
