import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

const baseUrl = true ? 'http://recruiter.dd:8083' : 'https://recruiter.tsample.co.uk';

function* getHomeFeaturedContent(){
  try{
    const request = yield axios.get( baseUrl + '/featured-article').then((response) => {
        return response.data
      }
    );
    yield put({ type: 'HOME_FEATURED_ARTICLE_NEWS_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'HOME_FEATURED_ARTICLE_NEWS_FAILED', payload:'failed' });
  }
}

function* getHomeArticleMostRecent(){
  try{
    const request = yield axios.get( baseUrl + '/home-article-most-recent').then((response) => {
        return response.data
      }
    );
    yield put({ type: 'HOME_ARTICLE_TOP_RECENT_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'HOME_ARTICLE_TOP_RECENT_FAILED', payload:'failed' });
  }
}

function* getHomeNewsTopThree(){
  try{
    const request = yield axios.get( baseUrl + '/home-news-top-three').then((response) => {
        return response.data
      }
    );
    yield put({ type: 'HOME_NEWS_TOP_THREE_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'FEATURED_ARTICLE_NEWS_FAILED', payload:'failed' });
  }
}

function* getHomeFeaturedMagazine(){
  try{
    const request = yield axios.get( baseUrl + '/home-featured-magazine').then((response) => {
        return response.data
      }
    );
    yield put({ type: 'HOME_FEATURED_MAGAZINE_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'FEATURED_ARTICLE_NEWS_FAILED', payload:'failed' });
  }
}

function* getHomeArticleMostPopular(){
  try{
    const request = yield axios.get( baseUrl + '/home-news-top-three').then((response) => {
        return response.data
      }
    );
    yield put({ type: 'HOME_ARTICLE_MOST_POPULAR_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'FEATURED_ARTICLE_NEWS_FAILED', payload:'failed' });
  }
}

export const contentsSagas = [
  takeLatest('[HOME] NEWS_TOP_THREE]', getHomeNewsTopThree),
  takeLatest('[HOME] FEATURED_ARTICLE', getHomeFeaturedContent),
  takeLatest('[HOME] ARTICLE_TOP_RECENT', getHomeArticleMostRecent ),
  takeLatest('[HOME] FEATURED_MAGAZINE', getHomeFeaturedMagazine ),
  takeLatest('[HOME] ARTICLE_MOST_POPULAR', getHomeArticleMostPopular ),
]
