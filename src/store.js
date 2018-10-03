import { createStore ,combineReducers , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import user from './services/session/reducer';
import createStory from 'components/modules/postLogin/createArticle/reducer';
// const reducers = Object.assign(
//     Session
// );

const rootReducer = combineReducers({user, createStory});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;
