import * as firebase from 'firebase';
import axios from 'axios';

const config = {
  apiKey: "AIzaSyBn8ckvmtTIs7_y6Op8ykjpayoFa89lvVM",
  authDomain: "recruiter-co-uk-26e2f.firebaseapp.com",
  databaseURL: "https://recruiter-co-uk-26e2f.firebaseio.com",
  projectId: "recruiter-co-uk",
  storageBucket: "recruiter-co-uk.appspot.com",
  messagingSenderId: "420839378773",
  appId: "1:420839378773:web:72d0abc62d90f03ff129dc"
};

firebase.initializeApp(config);
const database = firebase.database();
export { firebase, database as default };

const newsApi = 'https://newsapi.org/v2/';
const newsApiKey = '&apiKey=5caeb841f9df4be58fee5b88328a073d';
function* getHomeFeaturedContent(){

    yield axios.get( newsApi + 'top-headlines?country=gb&category=technology' + newsApiKey).then((response) => {

        response.data.articles.map((key, item)=>{
          // console.log(key.title, "men")
          database.ref('articles').push(key)
        })
        return response.data.articles
      }
    );

    yield axios.get( newsApi + 'top-headlines?country=us&category=business' + newsApiKey).then((response) => {

        response.data.articles.map((key, item)=>{
          // console.log(item, "travis")
          // database.ref('articles').push(key)
        })
        return response.data
      }
    );
}
// const gen = getHomeFeaturedContent();
// console.log(gen.next().value, "gen1")
// console.log(gen.next().value, "gen2")
// getHomeFeaturedContent().next()
