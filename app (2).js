import firebase from "firebase/app";   // the firbase core lib
import 'firebase/auth'; // specific products
import firebaseConfig from "./config/firebase";  // the firebase config we set up ealier

import Dash from "./Views/Dash";
import Checkin from "./Views/Checkin";
import Join from "./Views/Join";
import Profile from "./Views/Profile";


import {
    Switch,
    Route,
    useLocation
} from "react-router-dom";

...
return (
    <div>
        <ThemeProvider theme={theme}>
            <Header />
            <GlobalStyles />
            <Switch>
                <Route exact path="/">
                    <Dash checkins={checkins} />
                </Route>
                <Route path="/join">
                    <Join />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/checkin">
                    <Checkin />
                </Route>
            </Switch>
        </ThemeProvider>
    </div>
);
function App() {
  ...
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
  ...
}
firebase.auth().createUserWithEmailAndPassword('joe.appleton@solent.ac.uk', 'password');

const { isAuthenticated } = useAuth(firebase.auth);

import { useState } from "react";


function useAuth(fbAuth) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const createEmailUser = (email, password) => fbAuth().createUserWithEmailAndPassword(email, password);
    return { isAuthenticated, createEmailUser };
}

export default useAuth

const { isAuthenticated, createEmailUser } = useAuth(firebase.auth);

<Route path="/join">
    <Join createEmailUser={createEmailUser} />
</Route>

<Route path="/login">
       <Login signInEmailUser={signInEmailUser} />
</Route>

import { Switch, Route, useLocation, Redirect, useHistory } from "react-router-dom";

function App() {
    const history = useHistory();
 ...

    useEffect(() => {
        if (isAuthenticated) {
            history.push('/');
            return;
        }
        return;
    }, [isAuthenticated])

 ...

}
