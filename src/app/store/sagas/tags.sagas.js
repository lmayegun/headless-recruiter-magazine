import { put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import database from '../../../firebase/firebase';
import _ from '@lodash';

function* getTagsTopThree( {payload} ){
  const {category, tag} = payload;
  try{
    const request = yield database.ref(`articles/${category}`)
                            .once('value')
                            .then(function(snapshot) {
                              const articles = []
                              snapshot.forEach((child)=>{
                                  if( tag !== undefined && child.val().tags !== undefined){
                                    if(child.val().tags.includes(tag)){
                                      articles.push({
                                        id: child.key,
                                        ...child.val()
                                      })
                                    }
                                  }
                              })
                              return _.slice(_.reverse(articles), 0, 3);
                            });
    yield put({ type: 'TAGS_TOP_THREE_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'HOME_FEATURED_ARTICLE_NEWS_FAILED', payload:'failed' });
  }
}

function* getTagsTopSix( {payload} ){
  const {category, tag} = payload;
  try{
    const request = yield database.ref(`articles/${category}`)
                            .once('value')
                            .then(function(snapshot) {
                              const articles = []
                              snapshot.forEach((child)=>{
                                  if( tag !== undefined && child.val().tags !== undefined){
                                    if(child.val().tags.includes(tag)){
                                      articles.push({
                                        id: child.key,
                                        ...child.val()
                                      })
                                    }
                                  }
                              })
                              return _.slice(_.reverse(articles), 3, 12);
                            });
    yield put({ type: 'TAGS_TOP_SIX_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'HOME_FEATURED_ARTICLE_NEWS_FAILED', payload:'failed' });
  }
}

export const tagsSagas = [
  takeLatest('[TAGS] TAGS_TOP_THREE', getTagsTopThree),
  takeLatest('[TAGS] TAGS_TOP_SIX', getTagsTopSix)
]
