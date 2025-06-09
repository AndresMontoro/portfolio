document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('main section');

  // Función para resaltar la sección activa en el navbar
  function highlightNavLink() {
    let currentActiveSection = 'hero'; // Por defecto, la sección de inicio

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      // Si la sección está visible (al menos un 20% de su height desde la parte superior de la ventana)
      if (rect.top <= window.innerHeight * 0.20 && rect.bottom >= window.innerHeight * 0.20) {
        currentActiveSection = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === currentActiveSection) {
        link.classList.add('active');
      }
    });
  }

  // Escuchar el evento de scroll para actualizar la sección activa
  window.addEventListener('scroll', highlightNavLink);

  // Llamar a la función al cargar la página para establecer la sección inicial
  highlightNavLink();

  // Funcionalidad para desplegar/ocultar detalles de los proyectos
  const toggleButtons = document.querySelectorAll('.toggle-details-btn');

  toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
      const projectDetails = this.nextElementSibling; // El div de detalles es el siguiente hermano
      if (projectDetails.classList.contains('expanded')) {
        projectDetails.classList.remove('expanded');
        this.textContent = 'Ver Detalles';
      } else {
        projectDetails.classList.add('expanded');
        this.textContent = 'Ocultar Detalles';
      }
    });
  });
});