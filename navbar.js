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




//Efeito do SLIDE
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
const totalSlides = dots.length;

function showSlide(index) {
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  slides.style.transform = `translateX(-${currentIndex * 100}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
  });
});

showSlide(currentIndex);
setInterval(nextSlide, 7000); // Troca a cada 6 segundos
//acaba o efeito do slide