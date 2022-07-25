import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDuxv6YBHdgR7D9_PGhmt2cyVtWDkIiNjc",
    authDomain: "jwelco-94538.firebaseapp.com",
    projectId: "jwelco-94538",
    storageBucket: "jwelco-94538.appspot.com",
    messagingSenderId: "241418529833",
    appId: "1:241418529833:web:d87cfc8667f579c8678038"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth