import * as firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyBcPw596UBgVCwG368qShu2kuUFihV_KGw",
    authDomain: "booksanta-ad8d9.firebaseapp.com",
    databaseURL: "https://booksanta-ad8d9.firebaseio.com",
    projectId: "booksanta-ad8d9",
    storageBucket: "booksanta-ad8d9.appspot.com",
    messagingSenderId: "132139327653",
    appId: "1:132139327653:web:bcd8e1f059949016686d4c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();