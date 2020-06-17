import mock from './../mock';
import _ from 'lodash';

const termsDB = {
  newsTerms: [
    {
      id:"contracts",
      name:"Contracts",
      vocabularyName:"News",
    },
    {
      id:"financials",
      name:"Financials",
      vocabularyName:"News",
    },
    {
      id:"legislation",
      name:"Legislation",
      vocabularyName:"News",
    },
    {
      id:"lighter-side",
      name:"Lighter Side",
      vocabularyName:"News",
    },
    {
      id:"new-to-market",
      name:"New To Market",
      vocabularyName:"News",
    },
    {
      id:"people",
      name:"People",
      vocabularyName:"News",
    },
    {
      id:"Supplier Technology",
      name:"Supplier Technology",
      vocabularyName:"News",
    },
    {
      id:"hot100",
      name:"HOT 100",
      vocabularyName:"News",
    },
    {
      id:"fast-50",
      name:"FAST 50",
      vocabularyName:"News",
    },
    {
      id:"influential-11",
      name:"influential 11",
      vocabularyName:"News",
    },
  ],
  knowledgeTerms: [
    {
      id:"advice",
      name:"Advice",
      vocabularyName:"Knowledge",
    },
    {
      id:"analysis",
      name:"Analysis",
      vocabularyName:"Knowledge",
    },
    {
      id:"indepth",
      name:"In Depth",
      vocabularyName:"Knowledge",
    },
    {
      id:"opinion",
      name:"Opinion",
      vocabularyName:"Knowledge",
    },
    {
      id:"webinars",
      name:"Webinars",
      vocabularyName:"Knowledge",
    },
    {
      id:"trends",
      name:"Trends",
      vocabularyName:"Knowledge",
    },
    {
      id:"whitepapers",
      name:"Whitepapers",
      vocabularyName:"Knowledge",
    },
  ],
};

mock.onGet('/api/terms/news').reply(() => {
    return [200, termsDB.newsTerms];
});

mock.onGet('/api/terms/knowledge').reply(() => {
    return [200, termsDB.knowledgeTerms];
});

// mock.onGet('/api/contents-app/content').reply((request) => {
//     const {contentId} = request.params;
//     const response = _.find(contentsDB.contents, {id: contentId});
//     return [200, response];
// });
//
// mock.onGet('/api/contents-app/videos').reply(() => {
//     return [200, contentsDB.videos];
// });
//
// mock.onGet('/api/contents-app/video').reply((request) => {
//     const {videoId} = request.params;
//     const response = _.find(contentsDB.videos, {id: videoId});
//     return [200, response];
// });
