import { all } from 'redux-saga/effects';
import { homePageSagas } from './homePage.sagas';
import { magazineSagas } from './magazine.sagas';
export default function* APPsagas(){
  yield all([
    ...homePageSagas,
    ...magazineSagas
  ])
}
