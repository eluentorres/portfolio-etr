import { resources } from '../data/resources.js';

export default function resourcesGenerator() {
  const tabsContainer = document.getElementById('tabs-buttons-container');
  const panelsContainer = document.getElementById('tabs-panels-container');
  
  if (!tabsContainer || !panelsContainer) return;

  // Generar los Botones de las pestañas
  const buttonsHTML = resources.map((res, index) => `
    <button class="tab-btn ${index === 0 ? 'active' : ''}" data-target="${res.id}">
      ${res.category}
    </button>
  `).join('');

  // Generar los Paneles con sus listados de recursos individuales
  const panelsHTML = resources.map((res, index) => {
    const itemsHTML = res.items.map(item => `
      <div class="resource-item-card">
        <h4>${item.title}</h4>
        <p>${item.note}</p>
        <a href="${item.url}" target="_blank" rel="noopener noreferrer">Visitar sitio oficial →</a>
      </div>
    `).join('');

    return `
      <div id="${res.id}" class="tab-panel ${index === 0 ? 'active' : ''}">
        <h3>${res.category}</h3>
        <div class="resources-grid">
          ${itemsHTML}
        </div>
      </div>
    `;
  }).join('');

  tabsContainer.innerHTML = buttonsHTML;
  panelsContainer.innerHTML = panelsHTML;

  // Lógica del Event Listener para alternar las pestañas activas
  const buttons = tabsContainer.querySelectorAll('.tab-btn');
  const panels = panelsContainer.querySelectorAll('.tab-panel');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');

      // Remover clases activas de todos los botones y paneles
      buttons.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      // Agregar clase activa al elemento seleccionado
      btn.classList.add('active');
      const activePanel = document.getElementById(targetId);
      if (activePanel) activePanel.classList.add('active');
    });
  });
}