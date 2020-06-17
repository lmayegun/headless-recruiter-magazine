export const KNOWLEDGE_TERMS = '[KNOWLEDGE TERMS] KNOWLEDGE_TERMS';
export const KNOWLEDGE_TOP_THREE = '[KNOWLEDGE] KNOWLEDGE_TOP_THREE';
export const KNOWLEDGE_TOP_SIX = '[KNOWLEDGE] KNOWLEDGE_TOP_SIX';

export function getKnowledgeTerms(){
  return {type : KNOWLEDGE_TERMS};
}

export function getKnowledgeTopThree(){
  return {type : KNOWLEDGE_TOP_THREE};
}

export function getKnowledgeTopSix(){
  return {type : KNOWLEDGE_TOP_SIX};
}
