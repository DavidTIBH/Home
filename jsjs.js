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
 
 async function resetPassword(email) {
    try {
      const user = await admin.auth().getUserByEmail(email);
      await admin.auth().updateUser(user.uid, {
        password: 'nova-senha-gerada'
      });
      console.log('Senha redefinida com sucesso para o usuário:', user.email);
      return true;
    } catch (error) {
      console.error('Erro ao redefinir senha:', error);
      return false;
    }
  }
  resetPassword('emaildo@usuario.com')
  .then(success => {
    if (success) {
      console.log('Senha redefinida com sucesso!');
    } else {
      console.log('Falha ao redefinir senha.');
    }
  });
