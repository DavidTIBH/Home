document.addEventListener('DOMContentLoaded', function() {
  // Ao carregar a página, mostra a categoria "Eletrônicos" por padrão
  var categoriaPrograma = document.getElementById('categoria-Programa');
  categoriaPrograma.classList.add('ativo');
});

function mostrarCategoria(categoria) {
  // Esconde todas as categorias
  var categorias = document.querySelectorAll('.categoria');
  categorias.forEach(function(cat) {
      cat.classList.remove('ativo');
  });

  // Mostra a categoria clicada
  var categoriaSelecionada = document.getElementById('categoria-' + categoria);
  categoriaSelecionada.classList.add('ativo');
}

// IDs de acesso permitidos
var allowedIDs = ["MISTERTECHDAVID", "MISTERTECHDAVID", "MISTERTECHDAVID"]; // Adicione quantos IDs quiser aqui

// Nomes associados aos IDs
var userNames = {
  "MISTERTECHDAVID": "David"
};

document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission
  var accessCode = document.getElementById("access-code").value; // Get the value from input field
  
  // Check if the access code matches any of the allowed IDs
  if (allowedIDs.includes(accessCode)) {
      // If access granted, show the "Bem-vindo" message
      var userName = userNames[accessCode]; // Get the username based on the access code
      var welcomeMessage = "Bem-vindo, " + userName + "!"; // Create the welcome message
      document.getElementById("navbar-welcome").innerText = welcomeMessage; // Display the welcome message
      
      // Redirect to your desired HTML file (optional, if needed)
      window.location.href = "acessorestrito.html";
  } else {
      // If access denied, display error message
      var errorMessage = document.getElementById("error-message");
      var errorText = document.getElementById("error-text");
      var inputField = document.getElementById("access-code");
      
      errorMessage.style.display = "block";
      errorText.innerText = "Senha de acesso incorreta.";
      
      // Clear the input field
      inputField.value = "";
  }
});

document.getElementById("error-close").addEventListener("click", function() {
  document.getElementById("error-message").style.display = "none";
});
