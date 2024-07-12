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
