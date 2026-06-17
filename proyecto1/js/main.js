import { header, footer } from './templates/template.js';
import menu from './utils/menu.js';
import darkMode from './utils/darkMode.js';
import skillsList from './utils/skillsList.js';
import cheatsheetsList from './utils/cheatsheetsList.js';
import resourcesGenerator from './utils/resourcesGenerator.js';
import initWeather from './utils/weather.js'; // IMPORTACIÓN DEL CLIMA

document.addEventListener('DOMContentLoaded', () => {
  // 1. Lectura inmediata del tema oscuro para prevenir desfases visuales
  darkMode();

  // 2. Inyección de componentes estructurales compartidos
  const headerRoot = document.getElementById('header-root');
  const footerRoot = document.getElementById('footer-root');

  if (headerRoot) headerRoot.innerHTML = header;
  if (footerRoot) footerRoot.innerHTML = footer;

  // 3. Lanzamiento de funcionalidades y utilidades por página
  menu();
  skillsList();
  cheatsheetsList();
  resourcesGenerator();
  initWeather(); // INICIALIZACIÓN DEL WIDGET DEL CLIMA
});

// VOLVER AL MENU 
const backToMenuBtn = document.getElementById('back-to-menu-btn');
if (backToMenuBtn) {
  backToMenuBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}