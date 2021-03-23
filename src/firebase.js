import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD2axk6S_JuFCHZB7DIqnpY8KyMTdaZhEI",
    authDomain: "facebook-clone-280bf.firebaseapp.com",
    projectId: "facebook-clone-280bf",
    storageBucket: "facebook-clone-280bf.appspot.com",
    messagingSenderId: "327958095500",
    appId: "1:327958095500:web:0a5de8de5d4c9a18a47da9",
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const auth = firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider();
 
 export { auth, provider };
 export default db;