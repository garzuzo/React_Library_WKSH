import firebase from 'firebase/app';
import 'firebase/firestore';

var config = {
  apiKey: "AIzaSyAjQzS7BtjLuEa_gcvopSpxoRZZ9DO0SAI",
    authDomain: "libreria-fed37.firebaseapp.com",
    databaseURL: "https://libreria-fed37.firebaseio.com",
    projectId: "libreria-fed37",
    storageBucket: "libreria-fed37.appspot.com",
    messagingSenderId: "1053693616654"
  };
  firebase.initializeApp(config);

export default firebase;