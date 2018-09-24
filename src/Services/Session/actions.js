import axios from 'axios'

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export function requestLogin() {
    return {
        type: LOGIN_REQUEST,
    };
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export function loginSuccess(creds) {
    return {
        type: LOGIN_SUCCESS,
        token: creds,
    };
}

export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export function loginError(errorMessage) {
    return {
        type: LOGIN_FAILURE,
        errorMessage,
    };
}

export const LOGOUT = "LOGOUT";
export function logout(){
    localStorage.clear();   
    return{
        type:LOGOUT
    }
}

export function login(authenticationObj) {
    return (dispatch) => {
        dispatch(requestLogin());
        return axios.post('http://127.0.0.1:8000/api/login/', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
           body: JSON.stringify(authenticationObj)
        }).then((response) => {
            setTimeout(function(){
                if(response.data.loggedIn){
                    localStorage.setItem('session', JSON.stringify(response.data));
                    dispatch(loginSuccess(response.data));
                }else{
                    dispatch(loginError(response.data.message));
                }
            },2000)
        }).catch((error) => {
            dispatch(loginError(error));
            return Promise.reject(error);
        });
    }
}

