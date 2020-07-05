import { all } from 'redux-saga/effects';
import { homePageSagas } from './homePage.sagas';
import { newsSagas } from './news.sagas';
import { tagsSagas } from './tags.sagas';
import { knowledgeSagas } from './knowledge.sagas';
import { magazineSagas } from './magazine.sagas';
import { taxonomySagas } from './taxonomy.sagas';
import { articleSagas } from './article.sagas';

export default function* APPsagas(){
  yield all([
    ...homePageSagas,
    ...magazineSagas,
    ...newsSagas,
    ...taxonomySagas,
    ...articleSagas,
    ...knowledgeSagas,
    ...tagsSagas
  ])
}
