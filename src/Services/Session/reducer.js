
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE ,LOGOUT } from './actions';

let userData = JSON.parse(localStorage.getItem('session'));
const initialState = {
    isFetching: false,
    userObj: userData ? userData : null,
    errorMessage: null
};


export default function Session(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
          isFetching: true,
          userObj:null,
      });
      break;

    case LOGIN_FAILURE:
      return Object.assign({}, state, {
          isFetching: false,
          userObj:null,
          errorMessage: action.response.data ? action.response.data.message : "Oops! Unable to reach servers. Please try again."
      });
      break;

    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.response.data.token);
      return { ...state, isFetching: false, userObj: action.response.data.userData };
      break;

    case LOGOUT:
      return Object.assign( {}, state, {
          userObj: null
      });
      break;

    default:
      return state;
  }
}
