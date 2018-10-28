import {
  READ_STORY_REQUEST,
  READ_STORY_SUCCESS,
  READ_STORY_FAILURE,
  UPVOTE_STORY_REQUEST,
  UPVOTE_STORY_SUCCESS,
  UPVOTE_STORY_FAILURE,
  UPVOTE_STORY_RESET
} from './actions';
import _ from 'lodash';

const initialState = {
  story: {
    inProgress: false,
    errorMessage: "",
    data: {}
  },
  upvote: {
    errorMessage: "",
    success: false
  }
}

export default function(state = initialState, action) {
  let newState = _.cloneDeep(state);

  switch(action.type) {

    case READ_STORY_REQUEST:
      newState.story.inProgress = true;
      return({ ...newState });
      break;

    case READ_STORY_SUCCESS:
      newState.story.inProgress = false;
      newState.story.data = action.response.data.data;
      return({ ...newState });
      break;

    case READ_STORY_FAILURE:
      newState.inProgress = false;
      newState.errorMessage = action.response.data ? action.response.data.message : "Oops! Unable to reach servers. Please try again.";
      return({ ...newState });
      break;

    case UPVOTE_STORY_SUCCESS:
      newState.upvote.success = true;
        return({ ...newState });
      break;

    case UPVOTE_STORY_FAILURE:
      newState.upvote.errorMessage = action.response.data ? action.response.data.message : "Oops! Unable to reach servers. Please try again.";
      return({ ...newState });
      break;

    case UPVOTE_STORY_RESET:
      newState.upvote.success = false;
      return({...newState});

    default:
      return state;
  }

}
