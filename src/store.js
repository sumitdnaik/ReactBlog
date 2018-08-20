import { createStore ,combineReducers , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import * as Session from './Services/Session/reducer';

const reducers = Object.assign(
    Session
);

const rootReducer = combineReducers(reducers);

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;
