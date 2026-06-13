export default function darkMode() {
  // 1. Lógica ejecutada inmediatamente al cargar la app para evitar parpadeos
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }

  // 2. Delegación de eventos para capturar el botón inyectado dinámicamente
  document.body.addEventListener('click', (event) => {
    // Buscamos si el clic ocurrió en el botón o en cualquiera de sus iconos interiores
    const themeToggle = event.target.closest('#theme-toggle');
    
    // Si el clic no fue en el botón de cambio de tema, ignoramos el evento
    if (!themeToggle) return;

    // Prevenimos cualquier comportamiento por defecto si fuera necesario
    event.preventDefault();

    // Alternamos la clase en el cuerpo de la página
    document.body.classList.toggle('dark-mode');

    // Guardamos la preferencia en el almacenamiento del navegador (localStorage)
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
}