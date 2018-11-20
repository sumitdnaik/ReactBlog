import simpleAPIReducerUtil from 'services/utilities/simpleAPIReducerUtil';
import {GET_REQUEST,GET_SUCCESS,GET_FAILURE, SAVE_REQUEST, SAVE_SUCCESS, SAVE_FAILURE } from './actions';
const actionTypes = [ SAVE_REQUEST, SAVE_SUCCESS, SAVE_FAILURE ];
// const reducer = simpleAPIReducerUtil({
//   actionTypes,
//   isGetData: true,
//   getDataType: {}
// });

const initialState = {
  profile: {
    inProgress: false,
    errorMessage: "",
    data: []
  }
}
export default function(state = initialState,action){
  switch(action.type){
    case GET_REQUEST : 
      state.profile.inProgress = true;
      return ({...state});
    break;
    case GET_SUCCESS : 
      state.profile.data = action.response.data.profile;
      state.profile.inProgress = false;
      return({...state});
    break;
    case GET_FAILURE : 
      state.profile.inProgress = false;
      return({...state});
    break;
    case SAVE_REQUEST : 
      state.profile.inProgress = true;
      return ({...state});
    break;
    case SAVE_SUCCESS : 
      state.profile.data = action.response.data.data;
      state.profile.inProgress = false;
      return({...state});
    break;
    case SAVE_FAILURE : 
      state.profile.inProgress = false;
      return({...state});
    break;
    default:
      return state;
  }
};
