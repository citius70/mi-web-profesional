/**
 * Sistema de Includes Dinámicos
 * Carga archivos HTML (plantillas) de forma asíncrona en contenedores [data-include]
 * 
 * Uso:
 * <div data-include="plantillas/navbar.html"></div>
 */

if (!window.__includesLoaded__) {
  window.__includesLoaded__ = true;

  document.addEventListener('DOMContentLoaded', () => {
    const slots = document.querySelectorAll('[data-include]');
    if (!slots.length) return;

    slots.forEach(async (slot) => {
      const url = slot.getAttribute('data-include');
      
      try {
        // Usar cache por defecto para mejor rendimiento
        const resp = await fetch(url, { 
          cache: 'default' // Ahora respeta el cache del navegador
        });
        
        if (!resp.ok) {
          throw new Error(`HTTP ${resp.status}: No se pudo cargar ${url}`);
        }
        
        const html = await resp.text();

        // Reemplazar el contenedor ENTERO por el fragmento HTML
        slot.outerHTML = html;

        // Actualizar el año en el footer si existe
        const yearSpan = document.getElementById('copy-year');
        if (yearSpan) {
          yearSpan.textContent = new Date().getFullYear();
        }
      } catch (err) {
        console.error(`Error al incluir ${url}:`, err);
        
        // Mostrar un mensaje de error amigable
        slot.innerHTML = `
          <div class="alert alert-warning small my-3 mx-3" role="alert">
            <i class="bi bi-exclamation-triangle me-2"></i>
            No se pudo cargar la plantilla: <code>${url}</code>
          </div>`;
      }
    });
  });
}