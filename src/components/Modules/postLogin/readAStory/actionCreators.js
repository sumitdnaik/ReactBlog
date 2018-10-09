import axios from 'axios';
import { READ_STORY_REQUEST, READ_STORY_SUCCESS, READ_STORY_FAILURE } from './actions';
import APIUrls from 'constants/APIUrls';

export default function ReadStory(storyObj) {
  return {
    types: [READ_STORY_REQUEST, READ_STORY_SUCCESS, READ_STORY_FAILURE],
    callAPI: () =>  axios({
                      method: 'POST',
                      url: APIUrls.readStory,
                      data: { storyId: storyObj.storyId }
                    })
  }
};
