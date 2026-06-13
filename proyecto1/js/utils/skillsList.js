import { skills } from '../data/skills.js';

export default function skillsList() {
  const container = document.getElementById('skills-container');
  // Solo se ejecuta si estamos en la página que contiene este contenedor (index.html)
  if (!container) return; 

  // 1. Filtrar las habilidades dominadas
  const dominadas = skills.filter(skill => skill.state === 'dominada');

  // 2. Generar el HTML mapeando el array
  const skillsHTML = dominadas.map(skill => {
    // Generar las etiquetas (tags) individuales
    const tagsHTML = skill.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('');

    return `
      <div class="skill-card">
        <div class="skill-header">
          <img src="${skill.icon}" alt="Icono de ${skill.name}" class="skill-icon" width="40" height="40">
          <h3>${skill.name}</h3>
        </div>
        <span class="skill-level">${skill.level}</span>
        <p class="skill-desc">${skill.description}</p>
        <div class="skill-tags">
          ${tagsHTML}
        </div>
      </div>
    `;
  }).join(''); 
  
  
  // Unir todo el array en una sola cadena de texto HTML

  // 3. Inyectar en el DOM
  container.innerHTML = skillsHTML;
}