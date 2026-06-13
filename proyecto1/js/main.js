import { header, footer } from './templates/template.js';
import menu from './utils/menu.js';
import darkMode from './utils/darkMode.js';
import skillsList from './utils/skillsList.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inyectar componentes globales en los contenedores correspondientes
  const headerRoot = document.getElementById('header-root');
  const footerRoot = document.getElementById('footer-root');

  if (headerRoot) headerRoot.innerHTML = header;
  if (footerRoot) footerRoot.innerHTML = footer;

  // 2. Inicializar las funcionalidades dinámicas
  darkMode();
  menu();
  skillsList();
});
