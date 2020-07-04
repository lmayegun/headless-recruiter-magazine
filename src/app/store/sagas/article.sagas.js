import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import database from '../../../firebase/firebase';

function* getArticle({payload}){
  try{
    const request = yield database.ref(`articles/${payload.category}/${payload.id}`)
                            .once('value')
                            .then(function(snapshot) {
                              return snapshot.val();
                            });
    yield put({ type: 'GET_CURRENT_ARTICLE_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'CURRENT_CONTENT_FAILED', payload:'failed' });
  }
}

export const articleSagas = [
  takeLatest('[CURRENT ARTICLE]', getArticle),
]
