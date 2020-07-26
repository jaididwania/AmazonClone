import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDuFMzauM73nNuWxlJ8zGiLFXg7ae8qPLw",
  authDomain: "jaiclone.firebaseapp.com",
  databaseURL: "https://jaiclone.firebaseio.com",
  projectId: "jaiclone",
  storageBucket: "jaiclone.appspot.com",
  messagingSenderId: "658053765032",
  appId: "1:658053765032:web:45053b4fbe0dc1e496ef9d",
  measurementId: "G-TNW5X6YR0D",
});

const auth = firebase.auth();

export { auth };
