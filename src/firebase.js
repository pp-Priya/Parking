import * as firebase from "firebase";
import "firebase/firestore";

const settings = {timestampsInSnapshots: true};

let config = {
  apiKey: "AIzaSyDw9BLHoGbv65y_GMQmO-eY7n6XC-uZoiA",
  authDomain: "abcd1-71648.firebaseapp.com",
  projectId: "abcd1-71648",
  storageBucket: "abcd1-71648.appspot.com",
  messagingSenderId: "705791201328",
  appId: "1:705791201328:web:c6785588344f8fcc295df5",
  measurementId: "G-PQ65Q67VRW"
};

firebase.initializeApp(config);
firebase.firestore().settings(settings);
export default firebase;
