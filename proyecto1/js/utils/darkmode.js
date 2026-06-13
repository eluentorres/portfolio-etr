export default function darkMode() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  // Comprobar si ya existía una preferencia guardada en el navegador
  const savedTheme = localStorage.getItem('theme');
  
  // Si la preferencia era 'dark', aplicarla de inmediato
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }

  themeToggle.addEventListener('click', () => {
    // Alternar la clase en el body
    document.body.classList.toggle('dark-mode');

    // Guardar la preferencia actual para la siguiente visita
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
}