import axios from 'axios';
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR } from './actions';
import APIUrls from 'constants/APIUrls';

export default function signUp(signUpObj) {
  return {
    types: [SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR],
    callAPI: () =>  axios({
                      method: 'POST',
                      url: APIUrls.signUp,
                      data: signUpObj
                    }),
    payload: {}
  }
};
