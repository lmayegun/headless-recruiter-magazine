import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

const baseUrl = true ? 'http://recruiter.dd:8083' : 'https://recruiter.tsample.co.uk';

function* getMagazineIssueCarousel(){
  try{
    const request = yield axios.get( baseUrl + '/magazine-list').then((response) => {
        return response.data
      }
    );
    yield put({ type: 'MAGAZINE_ISSUE_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'FEATURED_ARTICLE_NEWS_FAILED', payload:'failed' });
  }
}

export const magazineSagas = [
  takeLatest('[MAGAZINE ISSUE CAROUSEL] MAGAZINE ISSUES CAROUSEL', getMagazineIssueCarousel),
]
