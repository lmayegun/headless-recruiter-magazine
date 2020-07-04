import firebase from 'firebase/app';
import 'firebase/database';



firebase.initializeApp(config);
const database = firebase.database();
export { firebase, database as default };

const magazines = [
  {
    name:"June-July 2020",
    field_cover: {
      src:"https://www.recruiter.co.uk/sites/default/files/styles/medium/public/rec_junjul20_linkedversion.jpg"
    },
    link:"https://www.recruiter.co.uk/magazine/june-july2020"
  },
  {
    name:"May 2020",
    field_cover: {
      src:"https://www.recruiter.co.uk/sites/default/files/styles/medium/public/rec.jpg"
    },
    link:"https://issuu.com/redactive/docs/rec_may20_full_linked_fr?fr=sODA4YjY3MzMwMA"
  },
  {
    name:"April 2020",
    field_cover: {
      src:"https://www.recruiter.co.uk/sites/default/files/styles/medium/public/rec_apr20_full.jpg?itok=CgSwnNL0"
    },
    link:"https://issuu.com/redactive/docs/rec_apr20_full"
  },
  {
    name:"March 2020",
    field_cover: {
      src:"https://www.recruiter.co.uk/sites/default/files/styles/medium/public/rec_mar20_full.jpg?itok=dW7ZizrR"
    },
    link:"https://issuu.com/redactive/docs/rec_mar20_full"
  },
  {
    name:"February 2020",
    field_cover: {
      src:"https://www.recruiter.co.uk/sites/default/files/styles/medium/public/rec_feb20_full_dragged.jpg?itok=eKObNJQ2"
    },
    link:"https://issuu.com/redactive/docs/rec_feb20_full"
  },
  {
    name:"January 2020",
    field_cover: {
      src:"https://www.recruiter.co.uk/sites/default/files/styles/medium/public/rec_jan20_full_dragged.jpg?itok=HKPMQivT"
    },
    link:"https://issuu.com/redactive/docs/rec_jan20_full"
  },
  {
    name:"December 2019",
    field_cover: {
      src:"https://www.recruiter.co.uk/sites/default/files/styles/medium/public/rec_dec19_full_lr_dragged.jpg?itok=AEtqICRU"
    },
    link:"https://issuu.com/redactive/docs/rec_junjul20_linkedversion?fr=sMTQyMDY3MzMwMA"
  },
  {
    name:"November 2019",
    field_cover: {
      src:"https://www.recruiter.co.uk/sites/default/files/styles/medium/public/media/image/2019/rec_nov19_full_dragged.jpg?itok=5WS6vBrd"
    },
    link:"https://issuu.com/redactive/docs/rec_junjul20_linkedversion?fr=sMTQyMDY3MzMwMA"
  }
]
// magazines.map((key, item)=>{
//   database.ref('magazines').push(key)
// })
