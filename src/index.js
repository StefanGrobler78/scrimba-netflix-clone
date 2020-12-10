import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import {GlobalStyles} from './global-styles'
import { FirebaseContext } from './context/firebase'

const config = {
    apiKey: "AIzaSyCUQrd5t5uihbIk6fBip8tPvMudjc0IlWs",
    authDomain: "scrimba-project-netflix-clone.firebaseapp.com",
    databaseURL: "https://scrimba-project-netflix-clone-default-rtdb.firebaseio.com",
    projectId: "scrimba-project-netflix-clone",
    storageBucket: "scrimba-project-netflix-clone.appspot.com",
    messagingSenderId: "635928607399",
    appId: "1:635928607399:web:96a74d19d69f83d3bb3982"
}

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
    <div>
        <FirebaseContext.Provider value={{ firebase: window.firebase }}>
                <GlobalStyles />
                <App />
        </FirebaseContext.Provider>
    </div>,
         document.getElementById('root')
        );
