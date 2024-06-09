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


// Function to send password reset email
function sendPasswordResetEmail() {
    const email = document.getElementById('email').value;

    // Send password reset email using Firebase Authentication
    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            alert('Password reset email sent successfully.');
        })
        .catch((error) => {
            console.error('Error sending password reset email:', error);
            alert('Error sending password reset email. Please check your email address and try again.');
        });
}
