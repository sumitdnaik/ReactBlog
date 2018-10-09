import simpleAPIReducerUtil from 'services/utilities/simpleAPIReducerUtil';
import { READ_STORY_REQUEST, READ_STORY_SUCCESS, READ_STORY_FAILURE } from './actions';
const actionTypes = [ READ_STORY_REQUEST, READ_STORY_SUCCESS, READ_STORY_FAILURE ];
const reducer = simpleAPIReducerUtil({
  actionTypes,
  isGetData: true,
  getDataType: {},
  dataSelector: "data"
});

export default reducer;
