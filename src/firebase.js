import { initializeApp } from 'firebase/app';
import '/firebase-auth';

//  Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_API_FIREBASE_API_KEY,
  projectId: process.env.REACT_API_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_API_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_API_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_API_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = app.auth;
export default app;
