// Importando o módulo Firebase Authentication
const firebase = require("firebase/app");
require("firebase/auth");

// Configurações do Firebase
const firebaseConfig = {
  apiKey: "Sua API key",
  authDomain: "seu-projeto.firebaseapp.com",
  // outras configurações necessárias
};

// Inicializando o app Firebase
firebase.initializeApp(firebaseConfig);

// Função para redefinir a senha
async function resetPassword(emailAddress) {
  try {
    // Enviando e-mail de redefinição de senha
    await firebase.auth().sendPasswordResetEmail(emailAddress);
    console.log("E-mail de redefinição de senha enviado com sucesso!");
  } catch (error) {
    console.error("Erro ao enviar e-mail de redefinição de senha:", error.message);
  }
}

// Exemplo de uso da função
resetPassword("exemplo@email.com");
