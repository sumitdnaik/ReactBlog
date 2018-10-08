import simpleAPIReducerUtil from 'services/utilities/simpleAPIReducerUtil';
import { PUBLISH_REQUEST, PUBLISH_SUCCESS, PUBLISH_ERROR } from './actions';
const actionTypes = [ PUBLISH_REQUEST, PUBLISH_SUCCESS, PUBLISH_ERROR ];
const reducer = simpleAPIReducerUtil({
  actionTypes,
  isGetData: false
});

export default reducer;
