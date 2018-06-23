import axios from 'axios';
import _ from 'lodash';

export function getArtsSuccess(arts) {
  return { type: 'FIND_ARTS_SUCCESS', arts };
}

export function editArtsSuccess(art) {
  return { type: 'EDIT_ART_SUCCESS', art };
}

export function getArts() {
  return function (dispatch) {
    axios({
      method: 'get',
      url: 'https://maddumajohnerick.herokuapp.com/deviant-works',
    })
    .then(function(response) {
      const byIds = _.mapKeys(response.data, '_id');
      const resObj = {
        allIds: Object.keys(byIds),
        byIds,
      };

      dispatch(getArtsSuccess(resObj));
    });
  };

}

export function getArt(id) {
  return function (dispatch) {
    axios({
      method: 'get',
      url: `https://maddumajohnerick.herokuapp.com/deviant-works/${id}`,
    })
    .then(function(response) {
      const byIds = _.mapKeys(response.data, '_id');
      const resObj = {
        byIds,
      };

      dispatch(getArtsSuccess(resObj));
    });
  };
}
