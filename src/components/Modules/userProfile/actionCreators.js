import axios from 'axios';
import { SAVE_REQUEST, SAVE_SUCCESS, SAVE_FAILURE,GET_REQUEST ,GET_SUCCESS,GET_FAILURE } from './actions';
import APIUrls from 'constants/APIUrls';

export function saveProfile(saveProfileObj) {
  debugger
  return {
    types: [SAVE_REQUEST, SAVE_SUCCESS, SAVE_FAILURE],
    callAPI: () =>  axios({
                      method: 'POST',
                      url: APIUrls.saveProfile,
                      data: saveProfileObj
                    }),
    payload: {}
  }
};

export function getProfile(getProfileObj) {
  return {
    types: [GET_REQUEST, GET_SUCCESS, GET_FAILURE],
    callAPI: () =>  axios({
                      method: 'POST',
                      url: APIUrls.getProfile,
                      data: getProfileObj
                    }),
    payload: {}
  }
};
