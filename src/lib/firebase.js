import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBxU1-csz_WbOr0nOZKT7b10zwbKgAnVaY",
  authDomain: "instagram-9b7ea.firebaseapp.com",
  projectId: "instagram-9b7ea",
  storageBucket: "instagram-9b7ea.appspot.com",
  messagingSenderId: "716623661625",
  appId: "1:716623661625:web:a08395a8a193d93e355be8",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
