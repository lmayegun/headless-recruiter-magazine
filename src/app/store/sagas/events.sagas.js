import { put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import database from '../../../firebase/firebase';
import _ from '@lodash';

// const baseUrl = true ? 'http://recruiter.dd:8083' : 'https://recruiter.tsample.co.uk';

function* getEventsTopThree(){
  try{
    const request = yield database.ref('articles/sport')
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
    yield put({ type: 'EVENTS_TOP_THREE_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'HOME_FEATURED_ARTICLE_NEWS_FAILED', payload:'failed' });
  }
}

function* getEventsTopSix(){
  try{
    const request = yield database.ref('articles/sport')
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
    yield put({ type: 'EVENTS_TOP_SIX_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'HOME_FEATURED_ARTICLE_NEWS_FAILED', payload:'failed' });
  }
}

export const eventsSagas = [
  takeLatest('[EVENTS] EVENTS_TOP_THREE', getEventsTopThree),
  takeLatest('[EVENTS] EVENTS_TOP_SIX', getEventsTopSix)
]
