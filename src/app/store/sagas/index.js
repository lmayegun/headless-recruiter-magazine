import { all } from 'redux-saga/effects';
import { homePageSagas } from './homePage.sagas';
import { newsSagas } from './news.sagas';
import { magazineSagas } from './magazine.sagas';
import { taxonomySagas } from './taxonomy.sagas';
export default function* APPsagas(){
  yield all([
    ...homePageSagas,
    ...magazineSagas,
    ...newsSagas,
    ...taxonomySagas
  ])
}
