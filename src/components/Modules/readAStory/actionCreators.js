import axios from 'axios';
import { READ_STORY_REQUEST, READ_STORY_SUCCESS, READ_STORY_FAILURE, UPVOTE_STORY_REQUEST, UPVOTE_STORY_SUCCESS, UPVOTE_STORY_FAILURE, UPVOTE_STORY_RESET } from './actions';
import APIUrls from 'constants/APIUrls';

export function ReadStory(storyObj) {
  debugger;
  return {
    types: [READ_STORY_REQUEST, READ_STORY_SUCCESS, READ_STORY_FAILURE],
    callAPI: () =>  axios({
                      method: 'POST',
                      url: APIUrls.readStory,
                      data: { storyId: storyObj.storyId },
                      headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token') ? localStorage.getItem('token') : null}`
                      }
                    })
  }
};

export function UpvoteStory(storyId) {
  return {
    types: [UPVOTE_STORY_REQUEST, UPVOTE_STORY_SUCCESS, UPVOTE_STORY_FAILURE],
    callAPI: () =>  axios({
                      method: 'POST',
                      url: APIUrls.upvoteStory,
                      data: { storyId },
                      headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token') ? localStorage.getItem('token') : null}`
                      }
                    })
  }
};

export function ResetUpvote(){
  return {
    type: UPVOTE_STORY_RESET
  }
}
