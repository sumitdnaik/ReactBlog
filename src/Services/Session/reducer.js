
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actions';

const initialState = {
    isFetching: false,
    userObj: localStorage.getItem('session'),
    errorMessage: null
};


export function Session(state = initialState, action) {
    switch (action.type) {

        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                userObj:null,
            });

        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                userObj:null,
                errorMessage: action.errorMessage
            });

        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                userObj: localStorage.getItem('session'),
                token: action.token,
            });

        default:
            return state;
    }
}
