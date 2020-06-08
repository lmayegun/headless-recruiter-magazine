import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

const baseUrl = true ? 'http://recruiter.dd:8083' : 'https://recruiter.tsample.co.uk';

function* getNewsTerms(){
  try{
    const request = yield axios.get( baseUrl + '/terms-list-by-vocabulary/6').then((response) => {
        return response.data
      }
    );
    yield put({ type: 'NEWS_TERMS_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'HOME_FEATURED_ARTICLE_NEWS_FAILED', payload:'failed' });
  }
}
export const taxonomySagas = [
  takeLatest('[NEWS TERMS] NEWS_TERMS', getNewsTerms),
]
