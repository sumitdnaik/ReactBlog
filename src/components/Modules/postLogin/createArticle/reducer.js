
import { PUBLISH_REQUEST, PUBLISH_SUCCESS, PUBLISH_ERROR } from './actions';

const initialState = {
  publishInProgress: false,
  errorMessage: null
};

export default function Publish(state = initialState, action) {
  switch (action.type) {
    case PUBLISH_REQUEST:
      return (
        { ...state, publishInProgress: true }
      );
      break;

    case PUBLISH_SUCCESS:
      return({
        ...state, publishInProgress: false
      });

    case PUBLISH_ERROR:
      return({
        ...state, publishInProgress: false, errorMessage: action.response.data.message
      });

    default:
      return state;
  }
}
