import { cheatsheets } from '../data/cheatsheets.js';

export default function cheatsheetsList() {
  const container = document.getElementById('cheatsheets-container');
  if (!container) return;

  const htmlContent = cheatsheets.map(sheet => `
    <a href="${sheet.link}" class="cheatsheet-card">
      <div class="cheatsheet-header">
        <img src="${sheet.icon}" alt="Icono de ${sheet.name}" width="35" height="35">
        <h3>${sheet.name}</h3>
      </div>
      <p>Acceder a la guía rápida interactiva de sintaxis, buenas prácticas y ejemplos prácticos.</p>
      <span class="cheatsheet-link-text">Ver Guía →</span>
    </a>
  `).join('');

  container.innerHTML = htmlContent;
}