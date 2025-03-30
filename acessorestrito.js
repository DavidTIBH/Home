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

// IDs de acesso permitidos com nome associado
var allowedIDs = {
  "MISTERTECHDAVID": "David"
};

document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário
  
  var accessCode = document.getElementById("access-code").value; // Obtém o valor do código de acesso inserido
  var userName = document.getElementById("user-name").value; // Obtém o nome inserido no campo "Nome do Usuário"

  // Verifica se o código de acesso está na lista de IDs permitidos
  if (allowedIDs.hasOwnProperty(accessCode)) {
    // Se o código estiver na lista, exibe a mensagem de boas-vindas com o nome associado
    var welcomeMessage = document.getElementById("welcome-message");
    var userNameDisplay = document.getElementById("user-name-display");
    userNameDisplay.innerText = allowedIDs[accessCode]; // Nome associado ao código de acesso
    welcomeMessage.style.display = "block"; // Exibe a mensagem de boas-vindas
    
    // Redireciona para a página restrita
    window.location.href = "acessorestrito.html";
  } else {
    // Se o código estiver errado, exibe a mensagem de erro
    var errorMessage = document.getElementById("error-message");
    var errorText = document.getElementById("error-text");
    var inputField = document.getElementById("access-code");
    
    errorMessage.style.display = "block";
    errorText.innerText = "Senha de acesso incorreta.";
    
    // Limpa o campo de entrada
    inputField.value = "";
  }
});

// Fecha a mensagem de erro
document.getElementById("error-close").addEventListener("click", function() {
  document.getElementById("error-message").style.display = "none";
});
