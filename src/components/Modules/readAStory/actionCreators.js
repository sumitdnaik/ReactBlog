import axios from 'axios';
import { READ_STORY_REQUEST, READ_STORY_SUCCESS, READ_STORY_FAILURE, UPVOTE_STORY_REQUEST, UPVOTE_STORY_SUCCESS, UPVOTE_STORY_FAILURE } from './actions';
import APIUrls from 'constants/APIUrls';

export function ReadStory(storyObj) {
  return {
    types: [READ_STORY_REQUEST, READ_STORY_SUCCESS, READ_STORY_FAILURE],
    callAPI: () =>  axios({
                      method: 'POST',
                      url: APIUrls.readStory,
                      data: { storyId: storyObj.storyId }
                    })
  }
};

export function UpvoteStory(storyId, userId) {
  return {
    types: [UPVOTE_STORY_REQUEST, UPVOTE_STORY_SUCCESS, UPVOTE_STORY_FAILURE],
    callAPI: () =>  axios({
                      method: 'POST',
                      url: APIUrls.upvoteStory,
                      data: { storyId, userId },
                      headers: {'x-access-token': localStorage.getItem('token') ? localStorage.getItem('token') : null},
                    })
  }
};
