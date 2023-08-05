import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6ip6KkN5W-9gOTVXt3XxGYsEPvbBfDH4",
  authDomain: "react-coderproyect-980da.firebaseapp.com",
  projectId: "react-coderproyect-980da",
  storageBucket: "react-coderproyect-980da.appspot.com",
  messagingSenderId: "541568230727",
  appId: "1:541568230727:web:d45abe80e20ba5793c5862"
};


// Initialize Firebase

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
