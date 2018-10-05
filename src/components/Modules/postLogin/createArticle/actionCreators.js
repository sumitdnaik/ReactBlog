import axios from 'axios';
import { PUBLISH_REQUEST, PUBLISH_SUCCESS, PUBLISH_ERROR } from './actions';
import APIUrls from 'constants/APIUrls';

export default function publish(storyObj) {
  return {
    types: [PUBLISH_REQUEST, PUBLISH_SUCCESS, PUBLISH_ERROR],
    callAPI: () =>  axios({
                      method: 'POST',
                      url: APIUrls.createStory,
                      data: { story: storyObj.story, user: storyObj.user }
                    }),
    payload: {}
  }
};
