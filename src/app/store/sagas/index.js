import { all } from 'redux-saga/effects';
import { contentsSagas } from './contents.sagas';
export default function* APPsagas(){
  yield all([
    ...contentsSagas,
  ])
}
