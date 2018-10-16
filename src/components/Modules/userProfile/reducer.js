import simpleAPIReducerUtil from 'services/utilities/simpleAPIReducerUtil';
import { SAVE_REQUEST, SAVE_SUCCESS, SAVE_FAILURE } from './actions';
const actionTypes = [ SAVE_REQUEST, SAVE_SUCCESS, SAVE_FAILURE ];
const reducer = simpleAPIReducerUtil({
  actionTypes,
  isGetData: true,
  getDataType: {}
});

export default reducer;
