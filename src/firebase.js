import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCFbkfboHUOp_OrhhpB2_wlwPRov9g021E",
    authDomain: "my-react-portfollio.firebaseapp.com",
    projectId: "my-react-portfollio",
    storageBucket: "my-react-portfollio.appspot.com",
    messagingSenderId: "56981817960",
    appId: "1:56981817960:web:1be0da986496152296c9dd",
    measurementId: "G-ZGFYE6F2DH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();