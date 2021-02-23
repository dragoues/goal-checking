import React from 'react';
import ReactDOM from 'react-dom';
import 'reset-css/reset.css'

import {
    BrowserRouter as Router
} from "react-router-dom";
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

exports.userCreated = functions.auth.user().onCreate(user => {
    return db
        .collection("users")
        .doc(user.uid)
        .set({ checkins: [] });
});

exports.userDeleted = functions.auth.user().onDelete(user => {
    return db
        .collection("users")
        .doc(user.uid)
        .delete();
});


const functions = require("firebase-functions");
const admin = require("firebase-admin");


