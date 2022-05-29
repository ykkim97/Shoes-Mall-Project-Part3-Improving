import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCCwt8AVPXoEGpX2XHzoBR6SYLJsRuUOak",
    authDomain: "shoes-shoppingmall.firebaseapp.com",
    databaseURL: "https://shoes-shoppingmall-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "shoes-shoppingmall",
    storageBucket: "shoes-shoppingmall.appspot.com",
    messagingSenderId: "533905534329",
    appId: "1:533905534329:web:6d37786f454f9edec753a8"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase();

export const auth = getAuth(app);