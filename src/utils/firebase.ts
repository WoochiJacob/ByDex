// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyASB0v-3cDVnaNDugUa53T4A-N-NxZA8w4',
    authDomain: 'gdag-f6f56.firebaseapp.com',
    projectId: 'gdag-f6f56',
    storageBucket: 'gdag-f6f56.appspot.com',
    messagingSenderId: '796338737863',
    appId: '1:796338737863:web:2b2a85c3e37881cad164e2',
    measurementId: 'G-T180XX6V3K',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
