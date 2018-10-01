import { createStore ,combineReducers , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import user from './services/session/reducer';

// const reducers = Object.assign(
//     Session
// );

const rootReducer = combineReducers({user});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;
