import mock from './../mock';
import _ from 'lodash';

const termsDB = {
  newsTerms: [
    {
      id:"abc-news",
      name:"ABC News",
      vocabularyName:"News",
    },
  ],
};

mock.onGet('/api/terms/news').reply(() => {
    return [200, termsDB.newsTerms];
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
