import firebase from 'firebase/app';
import 'firebase/database';

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

// const magazines = [
//   {
//     name:"Guide to IR35 Legislation 2020",
//     field_cover: {
//       src:"https://www.recruiter.co.uk/sites/default/files/styles/media-medium/public/newrec.ir35_mar20_full.gif?itok=wYP2l9gK"
//     },
//     link:"https://issuu.com/redactive/docs/rec.ir35_mar20_full"
//   },
//   {
//     name:"Managing Agency Workers and Contractors 2015",
//     field_cover: {
//       src:"https://www.recruiter.co.uk/sites/default/files/styles/media-medium/public/media/image/2017/managing-agency-workers-and-contractors-2015.png?itok=A9I6XzVT"
//     },
//     link:"https://issuu.com/redactive/docs/rgu_sup_july_full_lr"
//   },
//   {
//     name:"Guide to Recruitment Finance 2019",
//     field_cover: {
//       src:"https://www.recruiter.co.uk/sites/default/files/styles/media-medium/public/media/image/2019/grf_jul19_full_dragged_copyresized.png?itok=FtJZCIa5"
//     },
//     link:"https://issuu.com/redactive/docs/grf_jul19_full?e=1334262/70788055"
//   },
//   {
//     name:"Recruiter Fast 50 2016",
//     field_cover: {
//       src:"https://www.recruiter.co.uk/sites/default/files/styles/media-medium/public/media/image/2017/recruiter-fast-50-2016.png?itok=pGxNZhCg"
//     },
//     link:"https://issuu.com/redactive/docs/fast_50_feb16_full"
//   },
//   {
//     name:"Guide to Recruitment Technology 2019",
//     field_cover: {
//       src:"https://www.recruiter.co.uk/sites/default/files/styles/media-medium/public/media/image/2019/rectechguide-jun19_full-1.png?itok=C3MhkYMQ"
//     },
//     link:"https://issuu.com/redactive/docs/rectechguide_jun19_full?e=1334262/70119857"
//   },
//   {
//     name:"Recruitment Matters June-July 2020",
//     field_cover: {
//       src:"https://www.recruiter.co.uk/sites/default/files/styles/media-medium/public/rm_junjul20_full_1.jpg?itok=1S10LITq"
//     },
//     link:"https://issuu.com/redactive/docs/rm_matters_linked?fr=sY2ViMTY3MzMwMA"
//   },
//   {
//     name:"Guide to recruitment software 2016",
//     field_cover: {
//       src:"https://www.recruiter.co.uk/sites/default/files/styles/media-medium/public/media/image/2017/guide_to_recruitment_software_2016.png?itok=PxxPGJfH"
//     },
//     link:"https://issuu.com/redactive/docs/rsg_feb16_full"
//   },
//   {
//     name:"Managing Agency Workers and Contractors 2016",
//     field_cover: {
//       src:"https://www.recruiter.co.uk/sites/default/files/styles/media-medium/public/media/image/2017/managing-agency-workers-and-contractors-2016new1.png?itok=dK9hKan8"
//     },
//     link:"https://issuu.com/redactive/docs/rec_umbrella_supp16"
//   }
// ]
// magazines.map((key, item)=>{
//   database.ref('supplements').push(key)
// })
