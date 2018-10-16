import simpleAPIReducerUtil from 'services/utilities/simpleAPIReducerUtil';
import { GET_HOME_STORIES_REQUEST, GET_HOME_STORIES_SUCCESS, GET_HOME_STORIES_FAILURE } from './actions';
const actionTypes = [ GET_HOME_STORIES_REQUEST, GET_HOME_STORIES_SUCCESS, GET_HOME_STORIES_FAILURE ];
const reducer = simpleAPIReducerUtil({
  actionTypes,
  isGetData: true,
  getDataType: [],
  dataSelector: "stories"
});

export default reducer;
