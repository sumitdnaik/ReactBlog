import { createStore , combineReducers , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import callAPIMiddleware from 'services/middlewares/callAPIMiddleware';
import userReducer from './services/session/reducer';
import createStoryReducer from 'components/modules/postLogin/writeAStory/reducer';
import signUpReducer from 'components/modules/preLogin/signUp/reducer';
import homeReducer from 'components/modules/postLogin/home/reducer';
import ReadStoryReducer from 'components/modules/postLogin/readAStory/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  createStory: createStoryReducer,
  signUp: signUpReducer,
  home: homeReducer,
  readStory: ReadStoryReducer
});

const middlewares = [thunk, callAPIMiddleware];
const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
);

export default store;
