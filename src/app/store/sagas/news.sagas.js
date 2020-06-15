import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import database from '../../../firebase/firebase';
import _ from '@lodash';

const baseUrl = true ? 'http://recruiter.dd:8083' : 'https://recruiter.tsample.co.uk';

const newsApi = 'https://newsapi.org/v2/';
const newsApiKey = '&apiKey=5caeb841f9df4be58fee5b88328a073d';

function* getNewsTerms(){
  try{
    const request = yield axios.get( '/api/terms/news').then((response) => {
        return response.data
      }
    );
    yield put({ type: 'NEWS_TERMS_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'HOME_FEATURED_ARTICLE_NEWS_FAILED', payload:'failed' });
  }
}

function* getNewsTopThree(){
  try{
    const request = yield database.ref('business')
                            .once('value')
                            .then(function(snapshot) {
                              const articles = []
                              snapshot.forEach((child)=>{
                                  articles.push({
                                    id: child.key,
                                    ...child.val()
                                  })
                              })
                              return _.slice(_.reverse(articles), 0, 3);
                            });
    yield put({ type: 'NEWS_TOP_THREE_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'HOME_FEATURED_ARTICLE_NEWS_FAILED', payload:'failed' });
  }
}

function* getNewsTopSix(){
  try{
    const request = yield database.ref('business')
                            .once('value')
                            .then(function(snapshot) {
                              const articles = []
                              snapshot.forEach((child)=>{
                                  articles.push({
                                    id: child.key,
                                    ...child.val()
                                  })
                              })
                              return _.slice(_.reverse(articles), 3, 12);
                            });
    yield put({ type: 'NEWS_TOP_SIX_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'HOME_FEATURED_ARTICLE_NEWS_FAILED', payload:'failed' });
  }
}

export const newsSagas = [
  takeLatest('[NEWS TERMS] NEWS_TERMS', getNewsTerms),
  takeLatest('[NEWS] NEWS_TOP_THREE', getNewsTopThree),
  takeLatest('[NEWS] NEWS_TOP_SIX', getNewsTopSix)
]
