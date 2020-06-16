import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import _ from '@lodash';
import database from '../../../firebase/firebase';

const baseUrl = true ? 'http://recruiter.dd:8083' : 'https://recruiter.tsample.co.uk';

const newsApi = 'https://newsapi.org/v2/';
const newsApiKey = '&apiKey=5caeb841f9df4be58fee5b88328a073d';

function* getHomeFeaturedContent(){
  try{
    const request = yield database.ref('health')
                            .once('value')
                            .then(function(snapshot) {
                              const articles = []
                              snapshot.forEach((child)=>{
                                  articles.push({
                                    id: child.key,
                                    ...child.val()
                                  })
                              })
                              return _.slice(_.reverse(articles), 0, 1);
                            });
    yield put({ type: 'HOME_FEATURED_ARTICLE_NEWS_SUCCESS', payload:request });
  } catch (error){

    yield put({ type: 'HOME_FEATURED_ARTICLE_NEWS_FAILED', payload:'failed' });
  }
}

function* getHomeArticleMostRecent(){
  try{
    const request = yield database.ref('entertainment')
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
    yield put({ type: 'HOME_ARTICLE_TOP_RECENT_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'HOME_ARTICLE_TOP_RECENT_FAILED', payload:'failed' });
  }
}

function* getHomeNewsTopThree(){
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
                              return _.slice(_.reverse(articles), 0, 4);
                            });
    yield put({ type: 'HOME_NEWS_TOP_THREE_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'FEATURED_ARTICLE_NEWS_FAILED', payload:'failed' });
  }
}

function* getHomeFeaturedMagazine(){
  try{
    const request =  yield database.ref('business')
                            .once('value')
                            .then(function(snapshot) {
                              const articles = []
                              snapshot.forEach((child)=>{
                                  articles.push({
                                    id: child.key,
                                    ...child.val()
                                  })
                              })
                              return _.slice(_.reverse(articles), 0, 1);
                            });
    yield put({ type: 'HOME_FEATURED_MAGAZINE_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'FEATURED_ARTICLE_NEWS_FAILED', payload:'failed' });
  }
}

function* getHomeArticleMostPopular(){
  try{
    const request = yield database.ref('sports')
                            .once('value')
                            .then(function(snapshot) {
                              const articles = []
                              snapshot.forEach((child)=>{
                                  articles.push({
                                    id: child.key,
                                    ...child.val()
                                  })
                              })
                              return _.slice(_.reverse(articles), 0, 6);
                            });
    yield put({ type: 'HOME_ARTICLE_MOST_POPULAR_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'FEATURED_ARTICLE_NEWS_FAILED', payload:'failed' });
  }
}

function* getHomeArticleSponsored(){
  try{
    const request = yield database.ref('sports')
                            .once('value')
                            .then(function(snapshot) {
                              const articles = []
                              snapshot.forEach((child)=>{
                                  articles.push({
                                    id: child.key,
                                    ...child.val()
                                  })
                              })
                              return _.slice(_.reverse(articles), 0, 8);
                            });
    yield put({ type: 'HOME_ARTICLE_SPONSORED_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'FEATURED_ARTICLE_NEWS_FAILED', payload:'failed' });
  }
}

function* getHomeArticleProfiles(){
  try{
    const request = yield database.ref('sports')
                            .once('value')
                            .then(function(snapshot) {
                              const articles = []
                              snapshot.forEach((child)=>{
                                  articles.push({
                                    id: child.key,
                                    ...child.val()
                                  })
                              })
                              return _.slice(_.reverse(articles), 0, 2);
                            });
    yield put({ type: 'HOME_ARTICLE_POFILES_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'FEATURED_ARTICLE_NEWS_FAILED', payload:'failed' });
  }
}

function* getHomeOpinionRecent(){
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
    yield put({ type: 'HOME_OPINION_RECENT_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'FEATURED_ARTICLE_NEWS_FAILED', payload:'failed' });
  }
}

function* getHomeIndepthRecent(){
  try{
    const request = yield database.ref('entertainment')
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
    yield put({ type: 'HOME_INDEPTH_RECENT_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'FEATURED_ARTICLE_NEWS_FAILED', payload:'failed' });
  }
}

function* getHomeLighterRecent(){
  try{
    const request = yield database.ref('health')
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
    yield put({ type: 'HOME_LIGHTERSIDE_RECENT_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'FEATURED_ARTICLE_NEWS_FAILED', payload:'failed' });
  }
}

function* getHomeEventsRecent(){
  try{
    const request = yield database.ref('entertainment')
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
    yield put({ type: 'HOME_EVENTS_RECENT_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'FEATURED_ARTICLE_NEWS_FAILED', payload:'failed' });
  }
}

function* getHomeSupplements(){
  try{
    const request = yield axios.get( newsApi + 'top-headlines?country=gb&pageSize=10&page=2' + newsApiKey).then((response) => {
        return response.data
      }
    );
    yield put({ type: 'HOME_SUPPLEMENTS_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'FEATURED_ARTICLE_NEWS_FAILED', payload:'failed' });
  }
}

function* getHomeMagazinesIssue(){
  try{
    const request = yield database.ref('magazines')
                            .once('value')
                            .then(function(snapshot) {
                              const articles = []
                              snapshot.forEach((child)=>{
                                  articles.push({
                                    id: child.key,
                                    ...child.val()
                                  })
                              })
                              return articles;
                            });
    yield put({ type: 'HOME_MAGAZINE_ISSUE_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'FEATURED_ARTICLE_NEWS_FAILED', payload:'failed' });
  }
}

function* getSearchResults({payload}){
  const value = payload;
  try{
    const request = yield database.ref('business')
                            .once('value')
                            .then(function(snapshot) {
                              const articles = []
                              snapshot.forEach((child)=>{

                                if( child.val().title.toLowerCase().includes(value) ){
                                  articles.push({
                                    id: child.key,
                                    ...child.val()
                                  })
                                }

                              })
                              return _.reverse(articles);
                            });
    yield put({ type: 'SEARCH_RESULTS_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'HOME_ARTICLE_TOP_RECENT_FAILED', payload:'failed' });
  }
}


export const homePageSagas = [
  takeLatest('[HOME] NEWS_TOP_THREE]', getHomeNewsTopThree),
  takeLatest('[HOME] FEATURED_ARTICLE', getHomeFeaturedContent),
  takeLatest('[HOME] ARTICLE_TOP_RECENT', getHomeArticleMostRecent ),
  takeLatest('[HOME] FEATURED_MAGAZINE', getHomeFeaturedMagazine ),
  takeLatest('[HOME] ARTICLE_MOST_POPULAR', getHomeArticleMostPopular ),
  takeLatest('[HOME] ARTICLE_SPONSORED', getHomeArticleSponsored),
  takeLatest('[HOME] ARTICLE_PROFILES', getHomeArticleProfiles),
  takeLatest('[HOME] OPINION_RECENT', getHomeOpinionRecent),
  takeLatest('[HOME] INDEPTH_RECENT', getHomeIndepthRecent),
  takeLatest('[HOME] LIGHTER_RECENT', getHomeLighterRecent),
  takeLatest('[HOME] EVENTS_RECENT', getHomeEventsRecent),
  takeLatest('[HOME] SUPPLEMENTS', getHomeSupplements),
  takeLatest('[HOME] MAGAZINE_ISSUES', getHomeMagazinesIssue),
  takeLatest('[SEARCH] SEARCH_RESULTS',getSearchResults ),
]
