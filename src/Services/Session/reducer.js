
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actions';

const initialState = {
    isFetching: false,
    isAuthenticated: false,
    errorMessage: null
};


export function Session(state = initialState, action) {
    switch (action.type) {

        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated:false,
            });

        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated:false,
                errorMessage: action.errorMessage
            });

        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated:true,
                token: action.token,
            });

        default:
            return state;
    }
}
