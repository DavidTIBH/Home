// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

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

// Função para enviar e-mail de redefinição de senha
function sendPasswordResetEmail() {
  const email = document.getElementById("email").value;

  if (email) {
    auth.sendPasswordResetEmail(email)
      .then(() => {
        alert("Um e-mail de recuperação foi enviado para " + email);
        closePopup();
      })
      .catch((error) => {
        console.error("Erro ao enviar e-mail de recuperação:", error.message);
        alert("Ocorreu um erro ao enviar o e-mail de recuperação. Por favor, verifique seu endereço de e-mail e tente novamente.");
      });
  }
}

// Função para abrir a popup
function openPopup() {
  document.getElementById("popup").style.display = "block";
}

// Função para fechar a popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}
