// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDOK2QXVQ9XbozfNHREVw1Cr4nGxnWFoN0",
    authDomain: "loginmistertech.firebaseapp.com",
    projectId: "loginmistertech",
    storageBucket: "loginmistertech.appspot.com",
    messagingSenderId: "480926979614",
    appId: "1:480926979614:web:892177cac626f8be9b000f",
    measurementId: "G-MP6GWE5EH4"
  };

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

// Referência para o banco de dados do Firebase
const database = firebase.database();

// Referência para o formulário e lista de produtos
const productForm = document.getElementById('productForm');
const productList = document.getElementById('productList');

// Função para cadastrar um produto no Firebase
productForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;

    // Insere os dados no banco de dados
    database.ref('produtos').push({
        nome: productName,
        preco: productPrice
    });

    // Limpa os campos do formulário
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
});

// Função para exibir a lista de produtos cadastrados
database.ref('produtos').on('value', function(snapshot) {
    productList.innerHTML = ''; // Limpa a lista antes de adicionar os produtos

    snapshot.forEach(function(childSnapshot) {
        const product = childSnapshot.val();
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="#">${product.nome}</a> - R$ ${product.preco}`;
        productList.appendChild(listItem);
    });
});
