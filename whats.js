document.getElementById('whatsapp-button').addEventListener('click', function () {
    document.getElementById('whatsapp-form').style.display = 'block';
});

function sendWhatsApp() {
    var name = document.getElementById('name').value;
    var celular = document.getElementById('cpf').value;
    var problem= document.getElementById('city').value;

    var message = "Nome: " + name + "\nCelular: " + celular + "\nProblema: " + problem;

    var whatsappLink = "https://wa.me/31984264936?text=" + encodeURIComponent(message);
    window.open(whatsappLink, '_blank');

    document.getElementById('whatsapp-form').style.display = 'none';
}
