import { createStore ,combineReducers , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import user from './Services/Session/reducer';

// const reducers = Object.assign(
//     Session
// );

const rootReducer = combineReducers({user});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;
