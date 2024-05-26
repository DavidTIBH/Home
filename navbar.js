let prevScrollpos = window.pageYOffset;
const navbar = document.getElementById("navbar");

window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = `-${navbar.offsetHeight}px`;
    }

    prevScrollpos = currentScrollPos;
}


// Função para rolar suavemente para a seção correspondente ao clicar nos links da navegação
document.querySelectorAll('[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Impede o comportamento padrão do link

        const targetId = this.getAttribute('href').substring(1); // Obtém o ID da seção alvo
        const targetSection = document.getElementById(targetId); // Obtém a seção alvo

        // Verifica se o navegador suporta a rolagem suave
        if ('scrollBehavior' in document.documentElement.style) {
            // Rola suavemente para a seção alvo
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            // Fallback para rolagem normal
            const offsetTop = targetSection.offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


// IDs de acesso permitidos
var allowedIDs = ["DAVID", "DAVID2", "DAVID3"]; // Adicione quantos IDs quiser aqui

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    var accessCode = document.getElementById("access-code").value; // Get the value from input field
    // Check if the access code matches any of the allowed IDs
    if (allowedIDs.includes(accessCode)) {
        // If access granted, redirect to your desired HTML file
        window.location.href = "acessorestrito.html";
    } else {
        // If access denied, display error message
        var errorMessage = document.getElementById("error-message");
        var errorText = document.getElementById("error-text");
        errorMessage.style.display = "block";
        errorText.innerText = "Senha de acesso incorreta.";
    }
});

document.getElementById("error-close").addEventListener("click", function() {
    document.getElementById("error-message").style.display = "none";
});
