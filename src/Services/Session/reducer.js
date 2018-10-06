
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE ,LOGOUT } from './actions';

const initialState = {
    isFetching: false,
    userObj: JSON.parse(localStorage.getItem('session')),
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
          errorMessage: action.response.data.message
      });
      break;

    case LOGIN_SUCCESS:
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
