import * as Actions from '../../actions/app/index';

const initialState = {};

const navigationTerm = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_TAXONOMY_NAV_NEWS:
        {
          return {
             taxonomyTermNewsState: action.taxonomyTermNewsData
          }
        }
        case Actions.GET_TAXONOMY_NAV_ARTICLE:
        {
          return {
             taxonomyTermArticleState: action.taxonomyTermArticleData
          }
        }
        case Actions.GET_TAXONOMY_NAV_INDUSTRY_SECTORS:
        {
          return {
             taxonomyTermIndustrySectorsState: action.taxonomyTermIndustrySectorsData
          }
        }
        case Actions.GET_TAXONOMY_NAV_MAGAZINE:
        {
          return {
             taxonomyTermMagazineState: action.taxonomyTermMagazineData
          }
        }
        case Actions.GET_TAXONOMY_NAV_SUBJECTS:
        {
          return {
             taxonomyTermSubjectsState: action.taxonomyTermSubjectsData
          }
        }
        default:
        {
            return state;
        }
    }
};

export default navigationTerm;
