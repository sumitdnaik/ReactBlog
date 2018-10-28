import axios from 'axios';
import { PUBLISH_REQUEST, PUBLISH_SUCCESS, PUBLISH_ERROR } from './actions';
import APIUrls from 'constants/APIUrls';
import history from 'services/utilities/historyUtil';

export default function publish(storyObj) {
  return {
    types: [PUBLISH_REQUEST, PUBLISH_SUCCESS, PUBLISH_ERROR],
    callAPI: () =>  axios({
                      method: 'POST',
                      url: APIUrls.createStory,
                      data: { story: storyObj.story, user: storyObj.user },
                      headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token') ? localStorage.getItem('token') : null}`
                      }
                    }),
    payload: {},
    onSuccess: (response) => {
      history.push(`/story/${response.data.data.storyId}`);
    },
    onError: (error) => {
      console.log(error);
    }
  }
};
