import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import database from '../../../firebase/firebase';

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
    const request = yield database.ref('articles')
                            .once('value')
                            .then(function(snapshot) {
                              const articles = []
                              snapshot.forEach((child)=>{
                                if( child.val().source.name === "Spiegel Online"){
                                  articles.push({
                                    id: child.key,
                                    ...child.val()
                                  })
                                }
                              })
                              return articles;
                            });
    yield put({ type: 'NEWS_TOP_THREE_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'HOME_FEATURED_ARTICLE_NEWS_FAILED', payload:'failed' });
  }
}

function* getNewsTopSix(){
  try{
    const request = yield axios.get( newsApi + 'top-headlines?country=us&pageSize=6&page=2' + newsApiKey).then((response) => {
        return response.data
      }
    );
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
