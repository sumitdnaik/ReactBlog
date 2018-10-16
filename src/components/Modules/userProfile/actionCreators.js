import axios from 'axios';
import { SAVE_REQUEST, SAVE_SUCCESS, SAVE_FAILURE } from './actions';
import APIUrls from 'constants/APIUrls';

export default function saveProfile(signUpObj) {
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
