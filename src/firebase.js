import * as firebase from "firebase";
import "firebase/firestore";

const settings = {timestampsInSnapshots: true};

let config = {
  apiKey: "AIzaSyCgQa95Y155VcOsSAsckazR8sau7QZgLag",
  authDomain: "hello1-57e25.firebaseapp.com",
  projectId: "hello1-57e25",
  storageBucket: "hello1-57e25.appspot.com",
  messagingSenderId: "989159638944",
  appId: "1:989159638944:web:86574b3ebdcaafe71a46c5"
};

firebase.initializeApp(config);
firebase.firestore().settings(settings);
export default firebase;
