import axios from 'axios';
import { GET_HOME_STORIES_REQUEST, GET_HOME_STORIES_SUCCESS, GET_HOME_STORIES_FAILURE } from './actions';
import APIUrls from 'constants/APIUrls';

export default function GetStories(storyObj) {
  return {
    types: [GET_HOME_STORIES_REQUEST, GET_HOME_STORIES_SUCCESS, GET_HOME_STORIES_FAILURE],
    callAPI: () =>  axios({
                      method: 'POST',
                      url: APIUrls.getHomeStories
                    }),
    payload: {}
  }
};
