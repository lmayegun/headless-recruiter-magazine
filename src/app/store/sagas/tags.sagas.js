import { put, takeLatest} from 'redux-saga/effects';
import database from '../../../firebase/firebase';
import axios from 'axios';
import _ from '@lodash';

function* getTagTerms({payload}){
  const {category} = payload;
  try{
    const request = yield axios.get( `/api/terms/${category}`).then((response) => {
        return response.data
      }
    );
    yield put({ type: 'TAG_TERMS_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'HOME_FEATURED_ARTICLE_NEWS_FAILED', payload:'failed' });
  }
}

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
  takeLatest('[TAGS] TAGS_TOP_SIX', getTagsTopSix),
  takeLatest('[TAGS] TAG_TERMS', getTagTerms)
]
