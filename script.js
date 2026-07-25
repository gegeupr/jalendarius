document.getElementById('year').textContent = new Date().getFullYear();

const photos = [
  'retouch_2026052523393816.jpg',
  '1779474871628.png',
  'Man_posing_shirtless_studio_phot…_202607240106.jpeg',
  '1783644613439(1).png'
];

const carousel = document.getElementById('bgCarousel');
const slides = photos.map((name) => {
  const slide = document.createElement('div');
  slide.className = 'bg-slide';
  slide.style.backgroundImage = `url("public/${encodeURIComponent(name)}")`;
  carousel.appendChild(slide);
  return slide;
});

let current = 0;
const INTERVAL_MS = 6000;

function showSlide(index) {
  slides.forEach((s, i) => s.classList.toggle('active', i === index));
}

if (slides.length) {
  showSlide(current);
  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, INTERVAL_MS);
}
