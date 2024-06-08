 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
 import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
 import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"
 
 const firebaseConfig = {
    apiKey: "AIzaSyDOK2QXVQ9XbozfNHREVw1Cr4nGxnWFoN0",
    authDomain: "loginmistertech.firebaseapp.com",
    projectId: "loginmistertech",
    storageBucket: "loginmistertech.appspot.com",
    messagingSenderId: "480926979614",
    appId: "1:480926979614:web:892177cac626f8be9b000f",
    measurementId: "G-MP6GWE5EH4"
  };
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 const admin = require('firebase-admin');

 const serviceAccount = require('path/to/serviceAccountKey.json');
 
 admin.initializeApp({
   credential: admin.credential.cert(serviceAccount)
 });
 

  async function resetPassword() {
    const email = document.getElementById('email').value;
    try {
      const response = await fetch('/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      const result = await response.json();
      if (result.success) {
        alert('Um e-mail de redefinição de senha foi enviado para ' + email);
      } else {
        alert('Falha ao redefinir senha. Verifique o e-mail fornecido.');
      }
    } catch (error) {
      console.error('Erro ao redefinir senha:', error);
      alert('Erro ao redefinir senha. Por favor, tente novamente mais tarde.');
    }
  }

  document.getElementById('resetPasswordBtn').addEventListener('click', resetPassword);