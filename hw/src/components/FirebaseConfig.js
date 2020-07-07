import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBdVqlf5DWH1IzWBUZg96KNdQ4aws5m1i4",
    authDomain: "dzproject.firebaseapp.com",
    databaseURL: "https://dzproject.firebaseio.com",
    projectId: "dzproject",
    storageBucket: "dzproject.appspot.com",
    messagingSenderId: "179202583440",
    appId: "1:179202583440:web:a38c391f9ae9a43cd3a115"
  };

  firebase.initializeApp(firebaseConfig);

export default firebase;