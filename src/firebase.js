import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC42-vA02CbCdEpqA4bAy1dQ5UdQTtVi-w",
  authDomain: "disneyplus-clone-1ca80.firebaseapp.com",
  projectId: "disneyplus-clone-1ca80",
  storageBucket: "disneyplus-clone-1ca80.appspot.com",
  messagingSenderId: "647721894674",
  appId: "1:647721894674:web:185aabffd0dbfa10a9a9cb",
  measurementId: "G-26YF7ELD8M",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); //provide popup screen
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
