import store from '../../store.js';
import { login, logout } from "./actions";
import history from 'services/utilities/historyUtil';

class Session {
    static login(authenticationObj) {
        store.dispatch(login(authenticationObj))
            .then(() => {
                console.log('data fetched');
            });
    }

    static logout() {
        store.dispatch(logout());
        history.push("/");
            //.then(() => {
                //location.reload(true);
            //});
    }

}

export default Session;
