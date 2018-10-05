import { createStore , combineReducers , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import callAPIMiddleware from 'services/middlewares/callAPIMiddleware';
import user from './services/session/reducer';
import createStory from 'components/modules/postLogin/createArticle/reducer';
import signUpData from 'components/modules/preLogin/signUp/reducer';
// const reducers = Object.assign(
//     Session
// );
const rootReducer = combineReducers({
  user,
  createStory,
  signUpData
});
const middlewares = [thunk, callAPIMiddleware];
const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
);

export default store;
