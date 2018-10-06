
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './actions';

const initialState = {
  isSignUpInProgress: false,
  errorMessage: null
};

export default function signUpData(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return (
        { ...state, isSignUpInProgress: true }
      );
      break;

    case SIGNUP_SUCCESS:
      return({
        ...state, isSignUpInProgress: false
      });

    case SIGNUP_FAILURE:
      return({
        ...state, isSignUpInProgress: false, errorMessage: action.response.data.message
      });

    default:
      return state;
  }
}
