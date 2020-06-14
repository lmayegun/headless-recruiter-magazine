import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import database from '../../../firebase/firebase';

function* getContent({payload}){
  try{
    const request = yield database.ref(`${payload.category}/${payload.id}`)
                            .once('value')
                            .then(function(snapshot) {
                              return snapshot.val();
                            });
    yield put({ type: 'CURRENT_CONTENT_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'CURRENT_CONTENT_FAILED', payload:'failed' });
  }
}

export const contentSagas = [
  takeLatest('[CURRENT CONTENT]', getContent),
]
