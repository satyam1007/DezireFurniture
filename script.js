const button = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');

button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  menu.classList.toggle('menu-transition'); // Add or remove transition class
});

const carousel = document.getElementById('carousel');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let index = 0;

next.addEventListener('click', () => {
  index = (index + 1) % carousel.children.length;
  carousel.style.transform = `translateX(-${index * 100}%)`;
});

prev.addEventListener('click', () => {
  index = (index - 1 + carousel.children.length) % carousel.children.length;
  carousel.style.transform = `translateX(-${index * 100}%)`;
});

function updateCarousel() {
  const newTransformValue = `-${currentSlide * 100}%`;
  carousel.style.transform = `translateX(${newTransformValue})`;
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

