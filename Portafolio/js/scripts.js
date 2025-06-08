document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.skill-card');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const copyBtnEmail = document.getElementById('copy-btn-email');
  const copyBtnPhone = document.getElementById('copy-btn-phone');
  const toast = document.getElementById('toast');
  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('close-btn');
  const sidebar = document.getElementById('sidebar');
  const subtitle = document.querySelector('.animated-subtitle');
  const langToggle = document.getElementById('lang-toggle');
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

  // Diccionario de traducciones
  const translations = {
    es: {
      'contact-nav': 'Contacto',
      'project-nav': 'Proyectos',
      'skills-nav': 'Habilidades',
      'exp-nav': 'Experiencia',
      'about-nav': 'Sobre mí',
      'menu-sidebar': 'Menú',
      'contact-side': 'Contacto',
      'project-side': 'Proyectos',
      'skills-side': 'Habilidades',
      'exp-side': 'Experiencia',
      'about-side': 'Sobre mí',
      grettingFirst: 'Hola',
      grettingLast: 'soy',
      subtitle: 'Desarrolladora Web',
      "description-id": 'Diseño y desarrollo experiencias digitales intuitivas y escalables.',
      'copy-btn-email': 'Copiar',
      'copy-btn-phone': 'Copiar',
      toast: '¡Copiado en el portapapeles!',
      'download-cv': 'Descargar CV',
      projects: 'Proyectos',
      skills: 'Habilidades',
      'lang-prog': 'Lenguajes',
      tools: 'Herramientas',
      exp: 'Experiencia',
      'exp-sub1': 'Desarrolladora Full-Stack pasante en ULTRAPARK',
      'exp-span1': 'Marzo 2024 – Junio 2024',
      "exp11": "Diseñé y desarrollé aplicaciones web full-stack utilizando Laravel, Vue.js y SQL, asegurando código eficiente y escalable.",
      "exp12": "Gestioné el control de versiones con GitHub, aplicando buenas prácticas de colaboración en entornos de desarrollo.",
      "exp13": "Implementé prácticas de programación segura y optimización de bases de datos, mejorando la eficiencia y fiabilidad de las plataformas.",
      "exp14": "Contribuí a la optimización de la experiencia de usuario (UX/UI) en la gestión de mantenimientos programados, participando en el diseño e implementación de módulos clave. Esto resultó en una mejora del 15 % en la eficiencia y satisfacción del usuario.",
      "exp15": "Compartí conocimientos y colaboré con otros desarrolladores para mejorar continuamente los procesos y la calidad del software. Además, trabajé en entornos colaborativos y ágiles, promoviendo el trabajo en equipo y la entrega de soluciones orientadas a resultados. Esto llevó a una reducción del 10 % en el tiempo de desarrollo al automatizar tareas de mantenimiento.",
      'exp-sub2': 'Desarrolladora Full-Stack pasante en FUNDATEC',
      'exp-span2': 'Febrero 2022 – Junio 2023',
      "exp21": "Trabajé en estrecha colaboración con clientes para traducir sus necesidades a requisitos funcionales y técnicos detallados. Esto garantizó que los proyectos se desarrollaran alineados con sus expectativas y objetivos.",
      "exp22": "Apliqué mis conocimientos en lenguajes frontend y backend para construir soluciones web completas optimizando el proceso en un 65%. La metodología SCRUM facilitó la gestión eficiente de proyectos y la entrega oportuna.",
      "exp23": "Apliqué heurísticas de Nielsen para evaluar la usabilidad de las interfaces.",
      "exp24": "Identifiqué y corregí áreas problemáticas, lo que resultó en un aumento del 15% en la satisfacción del cliente.",
      'degree-title': 'Título de Grado',
      'degree-p': 'Ingeniería en Sistemas de Información - UNA',
      'cert-title': 'Certificaciones',
      about: 'Sobre Mí',
      "about-p1": "Soy una desarrolladora apasionada por la tecnología con experiencia práctica adquirida a través de dos pasantías formativas en <strong>FUNDATEC</strong> y <strong>ULTRAPARK II</strong>, donde fortalecí mis habilidades en desarrollo web full-stack y trabajo colaborativo. Además, he desarrollado proyectos pequeños y medianos con fines didácticos y de apoyo personal, lo que me ha permitido seguir aprendiendo de manera constante mientras creo soluciones útiles para mi entorno.",
      "about-p2": "Me caracterizo por ser organizada, detallista y perfeccionista, cualidades que aplico en cada proyecto para asegurar calidad y eficiencia, sin perder de vista la capacidad de priorizar lo verdaderamente importante. Me desenvuelvo con facilidad tanto en equipos de trabajo como de forma autónoma, adaptándome rápidamente a diferentes entornos y desafíos. Tengo un alto compromiso con el aprendizaje continuo, y como parte de mis intereses personales, estudio diseño gráfico, lo que me permite complementar mis conocimientos técnicos con una visión estética y centrada en la experiencia del usuario.",
      "about-p3": "Valoro la conexión con la naturaleza como forma de equilibrar la creatividad y el bienestar personal, lo cual influye positivamente en mi enfoque profesional.",
      copyright: '© 2025 Yoselin Rojas Fuentes. Todos los derechos reservados.'
    },
    en: {
      'contact-nav': 'Contact',
      'project-nav': 'Projects',
      'skills-nav': 'Skills',
      'exp-nav': 'Experience',
      'about-nav': 'About Me',
      'menu-sidebar': 'Menu',
      'contact-side': 'Contact',
      'project-side': 'Projects',
      'skills-side': 'Skills',
      'exp-side': 'Experience',
      'about-side': 'About Me',
      grettingFirst: 'Hello',
      grettingLast: "I'm",
      subtitle: 'Web Developer',
      "description-id": 'I design and develop intuitive and scalable digital experiences.',
      'copy-btn-email': 'Copy',
      'copy-btn-phone': 'Copy',
      toast: 'Copied to clipboard!',
      'download-cv': 'Download CV',
      projects: 'Projects',
      skills: 'Skills',
      'lang-prog': 'Languages',
      tools: 'Tools',
      exp: 'Experience',
      'exp-sub1': 'Full-Stack Developer Intern at ULTRAPARK',
      'exp-span1': 'March 2024 – June 2024',
      "exp11": "Designed and developed full-stack web applications using Laravel, Vue.js, and SQL, ensuring efficient and scalable code.",
      "exp12": "Managed version control with GitHub, applying best collaboration practices in development environments.",
      "exp13": "Implemented secure programming practices and database optimization, improving platform efficiency and reliability.",
      "exp14": "Contributed to user experience (UX/UI) optimization in scheduled maintenance management, participating in the design and implementation of key modules. This resulted in a 15% improvement in user efficiency and satisfaction.",
      "exp15": "Shared knowledge and collaborated with other developers to continuously improve software quality and processes. Also worked in collaborative and agile environments, promoting teamwork and result-oriented solutions. This led to a 10% reduction in development time by automating maintenance tasks.",
      'exp-sub2': 'Full-Stack Developer Intern at FUNDATEC',
      'exp-span2': 'February 2022 – June 2023',
      "exp21": "Worked closely with clients to translate their needs into detailed functional and technical requirements. This ensured that projects were developed aligned with their expectations and goals.",
      "exp22": "Applied my knowledge of frontend and backend languages to build complete web solutions, optimizing the process by 65%. The SCRUM methodology facilitated efficient project management and timely delivery.",
      "exp23": "Applied Nielsen heuristics to evaluate interface usability.",
      "exp24": "Identified and corrected problem areas, resulting in a 15% increase in customer satisfaction.",
      'degree-title': 'Degree Title',
      'degree-p': 'Information Systems Engineering - UNA',
      'cert-title': 'Certifications',
      about: 'About Me',
      "about-p1": "I am a developer passionate about technology with hands-on experience gained through two formative internships at <strong>FUNDATEC</strong> and <strong>ULTRAPARK II</strong>, where I strengthened my full-stack web development and collaboration skills. I have also developed small and medium-sized projects for educational and personal support purposes, which has allowed me to continue learning constantly while creating useful solutions for my environment.",
      "about-p2": "I am organized, detail-oriented, and a perfectionist qualities I apply in every project to ensure quality and efficiency, without losing sight of the ability to prioritize what truly matters. I work easily both in teams and independently, adapting quickly to different environments and challenges. I am strongly committed to continuous learning, and as part of my personal interests, I study graphic design, which allows me to complement my technical knowledge with an aesthetic and user-centered perspective.",
      "about-p3": "I value the connection with nature as a way to balance creativity and personal well-being, which positively influences my professional approach.",
      copyright: '© 2025 Yoselin Rojas Fuentes. All rights reserved.'
    }
  };

  let currentLang = 'es';

  function setLanguage(lang) {
    currentLang = lang;
    const texts = translations[lang];
    for (const key in texts) {
      const element = document.getElementById(key);

      if (key === 'download-cv') {
        const span = element?.querySelector('.download-text');
        if (span) span.textContent = texts[key];
      } else if (element) {
        element.innerHTML = texts[key];
      }
    }

    for (const key in texts) {
      const element = document.getElementById(key);

      if (key === 'download-cv') {
        const span = element?.querySelector('.download-text');
        if (span) span.textContent = texts[key];
      } else if (key === 'gretting') {
        const span = element?.querySelector('.gretting-text');
        if (span) span.textContent = texts[key];
      } else if (element) {
        element.innerHTML = texts[key];
      }
    }
  }

  const langCheckbox = document.getElementById("lang-toggle");
  langCheckbox?.addEventListener("change", () => {
    const newLang = langCheckbox.checked ? 'en' : 'es';
    setLanguage(newLang);
  });

  function updateCursorWidth() {
    if (langToggle.checked) {
      // Inglés: 13 caracteres
      subtitle.style.width = '13ch';
      subtitle.style.animation = 'typingLoopEn 19s steps(13, end) infinite, blink 0.7s step-end infinite';
    } else {
      // Español: 18 caracteres
      subtitle.style.width = '18ch';
      subtitle.style.animation = 'typingLoopEs 19s steps(18, end) infinite, blink 0.7s step-end infinite';
    }
  }

  // Animaciones con diferentes steps
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    @keyframes typingLoopEs {
      0% { width: 0ch; }
      10.5% { width: 18ch; }
      89.5% { width: 18ch; }
      100% { width: 0ch; }
    }
    @keyframes typingLoopEn {
      0% { width: 0ch; }
      10.5% { width: 13ch; }
      89.5% { width: 13ch; }
      100% { width: 0ch; }
    }
  `;
  document.head.appendChild(styleSheet);

  langToggle.addEventListener('change', updateCursorWidth);

  function ajustarPosicionTextoIdioma() {
    const textWrapper = document.querySelector('.text-wrapper');
    const langToggle = document.getElementById('lang-toggle');
    const isSpanish = langToggle.checked;

    const screenWidth = window.innerWidth;

    if (screenWidth <= 1024) {
      if (isSpanish) {
        textWrapper.style.left = '28px';
      } else {
        textWrapper.style.left = '47px';
      }
    } else {
      textWrapper.style.left = '42px';
    }
  }

  window.addEventListener('DOMContentLoaded', ajustarPosicionTextoIdioma);
  window.addEventListener('resize', ajustarPosicionTextoIdioma);
  document.getElementById('lang-toggle').addEventListener('change', () => {
    setTimeout(ajustarPosicionTextoIdioma, 10);
  });

  langToggle.addEventListener('change', () => {
    const lang = langToggle.checked ? 'es' : 'en';
    document.documentElement.setAttribute('data-lang', lang);
  });



  updateCursorWidth();
  setLanguage(currentLang);
  updateCarousel();
});