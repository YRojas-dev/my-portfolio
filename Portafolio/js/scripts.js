document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.skill-card');
  const track = document.querySelector('.carousel-track');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const copyBtnEmail = document.getElementById('copy-btn-email');
  const copyBtnPhone = document.getElementById('copy-btn-phone');
  const toast = document.getElementById('toast');
  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('close-btn');
  const sidebar = document.getElementById('sidebar');
  let current = 0;

  function updateCarousel() {
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

  function showToast() {
    toast.style.visibility = 'visible';
    toast.style.opacity = '1';
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => {
        toast.style.visibility = 'hidden';
      }, 500);
    }, 2000);
  }

  nextBtn?.addEventListener('click', nextSlide);
  prevBtn?.addEventListener('click', prevSlide);

  copyBtnEmail?.addEventListener('click', () => {
    navigator.clipboard.writeText('yrojas.dev@gmail.com')
      .then(showToast)
      .catch(err => console.error('Error al copiar: ', err));
  });

  copyBtnPhone?.addEventListener('click', () => {
    navigator.clipboard.writeText('+50662168604')
      .then(showToast)
      .catch(err => console.error('Error al copiar: ', err));
  });

  // Menú lateral
  menuBtn?.addEventListener('click', () => {
    sidebar?.classList.add('show');
  });

  closeBtn?.addEventListener('click', () => {
    sidebar?.classList.remove('show');
  });

  document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', () => {
      sidebar?.classList.remove('show');
    });
  });

  updateCarousel();
});