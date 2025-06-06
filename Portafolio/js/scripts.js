document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.skill-card');
    const track = document.querySelector('.carousel-track');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let current = 0;
  
    function updateCarousel() {
      const total = cards.length;
      const radius = 260;
  
      cards.forEach((card, index) => {
        card.classList.remove('active');
        const angle = ((index - current) * 120) * (Math.PI / 180);
        const x = Math.sin(angle) * radius;
  
        let zIndex = 1;
        let scale = 0.8;
        let opacity = 0.6;
        let filter = 'brightness(0.7)';
  
        if (index === current) {
          scale = 1.1;
          opacity = 1;
          filter = 'brightness(1)';
          zIndex = 10;
        }
  
        card.style.transform = `translate(calc(-50% + ${x}px), -50%) scale(${scale})`;
        card.style.zIndex = zIndex;
        card.style.opacity = opacity;
        card.style.filter = filter;
  
        if (index === current) card.classList.add('active');
      });
    }
  
    function nextSlide() {
      current = (current + 1) % cards.length;
      updateCarousel();
    }
  
    function prevSlide() {
      current = (current - 1 + cards.length) % cards.length;
      updateCarousel();
    }
  
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
  
    updateCarousel();
  });
  