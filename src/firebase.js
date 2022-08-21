import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// const firebaseConfig = {
//     apiKey: "AIzaSyDF7M2fXFB39wzRxlmysyuXkbkjvsLMdJc",
//     authDomain: "disney-clone-da279.firebaseapp.com",
//     projectId: "disney-clone-da279",
//     storageBucket: "disney-clone-da279.appspot.com",
//     messagingSenderId: "476728551206",
//     appId: "1:476728551206:web:326eef7bbd0a843af403e7",
//     measurementId: "G-398DKQ918Q"
// };

// // Initialize Firebase
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export {auth,provider,storage};
// export default db;

const firebaseConfig = {
    apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
    authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
    projectId: "disneyplus-clone-a33d5",
    storageBucket: "disneyplus-clone-a33d5.appspot.com",
    messagingSenderId: "37918794208",
    appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
    measurementId: "G-DRVLJKWRWG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
