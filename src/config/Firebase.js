import firebase from 'firebase/app';
import 'firebase/firestore';

var config = {
    apiKey: "AIzaSyDK-znSL__6nFbWzNSIGTwtdk58pnQJriY",
    authDomain: "libreria-b3987.firebaseapp.com",
    databaseURL: "https://libreria-b3987.firebaseio.com",
    projectId: "libreria-b3987",
    storageBucket: "libreria-b3987.appspot.com",
    messagingSenderId: "710050059759"
  };
  firebase.initializeApp(config);

export default firebase;