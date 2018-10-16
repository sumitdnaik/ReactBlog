import { createStore , combineReducers , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import callAPIMiddleware from 'services/middlewares/callAPIMiddleware';
//import ensureIfLoggedInReducer from 'components/modules/ensureIfLoggedIn/reducer';
import userReducer from './services/session/reducer';
import createStoryReducer from 'components/modules/writeAStory/reducer';
import signUpReducer from 'components/modules/signUp/reducer';
import homeReducer from 'components/modules/home/reducer';
import ReadStoryReducer from 'components/modules/readAStory/reducer';

const rootReducer = combineReducers({
  //: ensureIfLoggedInReducer,
  user: userReducer,
  createStory: createStoryReducer,
  signUp: signUpReducer,
  home: homeReducer,
  readStory: ReadStoryReducer,
});

const middlewares = [thunk, callAPIMiddleware];
const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
);

export default store;
