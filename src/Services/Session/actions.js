import axios from 'axios';
import APIUrls from "constants/APIUrls";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = "LOGOUT";

export function logout(){
    localStorage.setItem('session', null);
    return({
        type: LOGOUT
    })
}

export function login(authenticationObj) {
  return {
    types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
    callAPI: () =>  axios({
                      method: 'POST',
                      url: APIUrls.login,
                      data: authenticationObj
                    }),
    onSuccess: (response) => {
      if(response.data.loggedIn){
          localStorage.setItem('session', JSON.stringify({...response.data.userData, isLoggedIn: true}));
          return true;
      }
      else {
        return false;
      }
    },
    conditionedDispatch: true,
    payload: {}
  }
};
