import store from '../../store.js';

import { login, logout } from "./actions";

class Session {
    static login(authenticationObj) {
        store.dispatch(login(authenticationObj))
            .then(() => {
                console.log('data fetched');
            });
    }

    static logout() {
        store.dispatch(logout())
            .then(() => {
                location.reload(true);
            });
    }
}

export default Session;