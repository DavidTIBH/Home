<?php
// Recebendo os dados do formulário
$nome = $_POST['nome'];
$url = $_POST['url'];

// Montando a string com os dados
$dados = "$nome|$url\n";

// Abrindo o arquivo em modo de escrita e adicionando os dados
$file = fopen("cadastros.txt", "a");
fwrite($file, $dados);
fclose($file);

// Redirecionando de volta para a página inicial após o cadastro
header("Location: index.php");
exit();
?>
