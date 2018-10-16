import simpleAPIReducerUtil from 'services/utilities/simpleAPIReducerUtil';
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './actions';
const actionTypes = [ SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE ];
const reducer = simpleAPIReducerUtil({
  actionTypes,
  isGetData: true,
  getDataType: {}
});

export default reducer;
