const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');
const resetpassword=document.getElementById('recoverpassword');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})



    // Começa o efeito popup redefinição de senha.

    document.getElementById('open-popup').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'block';
      });
      
      document.getElementById('close-popup').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none';
      });
      
      document.getElementById('reset-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // Add your logic here to handle form submission (e.g., sending reset email)
      });
          // Termina redefinição de senha.