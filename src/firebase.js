// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDigIBT9jifLUgHP6rzixK0O7sPG2OWDmc',
  authDomain: 'piloting-management-system.firebaseapp.com',
  projectId: 'piloting-management-system',
  storageBucket: 'piloting-management-system.appspot.com',
  messagingSenderId: '157570673617',
  appId: '1:157570673617:web:d6bbed03d3df591fd1cef0',
  measurementId: 'G-H1HDP9J570',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
