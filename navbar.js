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

let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelector('.slides');
  const totalSlides = slides.children.length;

  // Atualiza o índice do slide atual
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

  // Move o slider para o slide correspondente
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}
