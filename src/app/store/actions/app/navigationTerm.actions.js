import {AppUtils} from '@localpkg';
import axios from 'axios';

export const GET_NAVIGATION = '[NAVIGATION] GET NAVIGATION';
export const SET_NAVIGATION = '[NAVIGATION] SET NAVIGATION';
export const RESET_NAVIGATION = '[NAVIGATION] RESET NAVIGATION';

export const GET_TAXONOMY_NAV_NEWS = '[NAVIGATION] GET TAXONOMY TERM NEWS';
export const GET_TAXONOMY_NAV_ARTICLE = '[NAVIGATION] GET TAXONOMY TERM ARTICLE';
export const GET_TAXONOMY_NAV_INDUSTRY_SECTORS = '[NAVIGATION] GET TAXONOMY TERM INDUSTRY SECTORS';
export const GET_TAXONOMY_NAV_MAGAZINE = '[NAVIGATION] GET TAXONOMY TERM MAGAZINE';
export const GET_TAXONOMY_NAV_SUBJECTS = '[NAVIGATION] GET TAXONOMY TERM SUBJECTS';

export function getTaxonomyTermNews()
{
  const request = axios.get('https://recruiter.tsample.co.uk/terms-list-by-vocabulary/6');
  return (dispatch) =>
    request.then(function(response){
      dispatch({
          type   :  GET_TAXONOMY_NAV_NEWS,
          taxonomyTermNewsData: response.data
      })
    });
}

export function getTaxonomyTermArticle()
{
  const request = axios.get('https://recruiter.tsample.co.uk/terms-list-by-vocabulary/2');
  return (dispatch) =>
    request.then(function(response){
      dispatch({
          type   :  GET_TAXONOMY_NAV_ARTICLE,
          taxonomyTermArticleData: response.data
      })
    });
}

export function getTaxonomyTermIndustrySectors()
{
  const request = axios.get('https://recruiter.tsample.co.uk/terms-list-by-vocabulary/3');
  return (dispatch) =>
    request.then(function(response){
      dispatch({
          type   :  GET_TAXONOMY_NAV_INDUSTRY_SECTORS,
          taxonomyTermIndustrySectorsData: response.data
      })
    });
}

export function getTaxonomyTermMagazine()
{
  const request = axios.get('https://recruiter.tsample.co.uk/terms-list-by-vocabulary/4');
  return (dispatch) =>
    request.then(function(response){
      dispatch({
          type   :  GET_TAXONOMY_NAV_MAGAZINE,
          taxonomyTermMagazineData: response.data
      })
    });
}

export function getTaxonomyTermSubjects()
{
  const request = axios.get('https://recruiter.tsample.co.uk/terms-list-by-vocabulary/5');
  return (dispatch) =>
    request.then(function(response){
      dispatch({
          type   :  GET_TAXONOMY_NAV_SUBJECTS,
          taxonomyTermSubjectsData: response.data
      })
    });
}

export function getNavigation()
{
    return {
        type: GET_NAVIGATION
    }
}

export function setNavigation(navigation)
{
    return {
        type: SET_NAVIGATION,
        navigation
    }
}

export function resetNavigation()
{
    return {
        type: RESET_NAVIGATION
    }
}

export function appendNavigationItem(item, parentId)
{
    return (dispatch, getState) => {
        const {navigation} = getState().navigation;
        AppUtils.appendNavItemToParent(navigation)
        return dispatch({
            type      : SET_NAVIGATION,
            navigation: AppUtils.appendNavItem(navigation, item, parentId)
        });
    }
}

export function prependNavigationItem(item, parentId)
{
    return (dispatch, getState) => {
        const {navigation} = getState().fuse;
        return dispatch({
            type      : SET_NAVIGATION,
            navigation: AppUtils.prependNavItem(navigation, item, parentId)
        });
    }
}

export function updateNavigationItem(id, item)
{
    return (dispatch, getState) => {
        const {navigation} = getState().fuse;
        return dispatch({
            type      : SET_NAVIGATION,
            navigation: AppUtils.updateNavItem(navigation, id, item)
        });
    }
}

export function removeNavigationItem(id)
{
    return (dispatch, getState) => {
        const {navigation} = getState().fuse;
        return dispatch({
            type      : SET_NAVIGATION,
            navigation: AppUtils.removeNavItem(navigation, id)
        });
    }
}
