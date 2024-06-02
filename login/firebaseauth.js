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

 function showMessage(message, divId){
    var messageDiv=document.getElementById(divId);
    messageDiv.style.display="block";
    messageDiv.innerHTML=message;
    messageDiv.style.opacity=1;
    setTimeout(function(){
        messageDiv.style.opacity=0;
    },5000);
 }
 const signUp=document.getElementById('submitSignUp');
 signUp.addEventListener('click', (event)=>{
    event.preventDefault();
    const email=document.getElementById('rEmail').value;
    const password=document.getElementById('rPassword').value;
    const firstName=document.getElementById('fName').value;
    const lastName=document.getElementById('lName').value;

    const auth=getAuth();
    const db=getFirestore();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        const user=userCredential.user;
        const userData={
            email: email,
            firstName: firstName,
            lastName:lastName
        };
        showMessage('Account Created Successfully', 'signUpMessage');
        const docRef=doc(db, "users", user.uid);
        setDoc(docRef,userData)
        .then(()=>{
            window.location.href='index.html';
        })
        .catch((error)=>{
            console.error("error writing document", error);

        });
    })
    .catch((error)=>{
        const errorCode=error.code;
        if(errorCode=='auth/email-already-in-use'){
            showMessage('Email Address Already Exists !!!', 'signUpMessage');
        }
        else{
            showMessage('unable to create User', 'signUpMessage');
        }
    })
 });

 const signIn=document.getElementById('submitSignIn');
 signIn.addEventListener('click', (event)=>{
    event.preventDefault();
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const auth=getAuth();

    signInWithEmailAndPassword(auth, email,password)
    .then((userCredential)=>{
        showMessage('login is successful', 'signInMessage');
        const user=userCredential.user;
        localStorage.setItem('loggedInUserId', user.uid);
        window.location.href='https://consultoriamt.com.br/homepage.html';
    })
    .catch((error)=>{
        const errorCode=error.code;
        if(errorCode==='auth/invalid-credential'){
            showMessage('Incorrect Email or Password', 'signInMessage');
        }
        else{
            showMessage('Account does not Exist', 'signInMessage');
        }
    })
 })

  
  // Função para abrir a popup
  function openPopup() {
    document.getElementById("popup").style.display = "block";
  }
  
  // Função para fechar a popup
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
  
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
  