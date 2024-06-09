// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

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
const auth = getAuth(); // Get the Auth object

// Cadastro
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("Usuário cadastrado com sucesso!");
    })
    .catch((error) => {
      console.error(error.message);
    });
});

// Login
const signinForm = document.getElementById('signin-form');
signinForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('signin-email').value;
  const password = document.getElementById('signin-password').value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("Usuário logado com sucesso!");
    })
    .catch((error) => {
      console.error(error.message);
    });
});

// Redefinição de Senha
const resetForm = document.getElementById('reset-form');
resetForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('reset-email').value;
  sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log("E-mail de redefinição de senha enviado!");
    })
    .catch((error) => {
      console.error(error.message);
    });
});
