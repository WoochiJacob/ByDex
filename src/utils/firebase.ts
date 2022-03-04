// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyC4d-1jyow7feVJqYaKGebWxouXpDsdldQ',
    authDomain: 'bydex-bc16c.firebaseapp.com',
    projectId: 'bydex-bc16c',
    storageBucket: 'bydex-bc16c.appspot.com',
    messagingSenderId: '782732798919',
    appId: '1:782732798919:web:092e21f2bb02f9887e47e2',
    measurementId: 'G-8Z5MMVZVZ1',
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
