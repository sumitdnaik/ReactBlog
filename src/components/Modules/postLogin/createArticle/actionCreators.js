import axios from 'axios';
import * as actions from './actions';
import API from 'constants/APIs';

export function publishRequest(){
  return({
    type: actions.PUBLISH_REQUEST
  });
}

export function publishSuccess(data){
  return({
    type: actions.PUBLISH_SUCCESS,
    data
  });
}

export function publishError(data){
  return({
    type: actions.PUBLISH_ERROR,
    data
  });
}


export default function publish(storyObj) {
    return (dispatch) => {
        dispatch(publishRequest());

        return axios({
            method: 'POST',
            url: API.postLogin.createStory,
            data: { story: storyObj.story, user: storyObj.user }
          })
          .then(function (response) {
            dispatch(publishSuccess(response.data));
          })
          .catch((errorRes) => {
            dispatch(publishError(errorRes.data));
            return Promise.reject(errorRes.data);
          });
    }
}
