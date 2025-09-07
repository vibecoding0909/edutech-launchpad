import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCDzANz-JlXkK5RyQ9ZOxvoA7PnWHvcE0k",
  authDomain: "sipproject-bf7a5.firebaseapp.com",
  projectId: "sipproject-bf7a5",
  storageBucket: "sipproject-bf7a5.appspot.com",
  messagingSenderId: "308294546161",
  appId: "1:308294546161:web:da997fb5c6626b6cf9af50",
  measurementId: "G-6LJ6XCBJT0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;