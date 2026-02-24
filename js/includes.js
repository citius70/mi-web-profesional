
// Evita ejecución doble si el script se inyecta dos veces
if (!window.__includesLoaded__) {
  window.__includesLoaded__ = true;

  document.addEventListener('DOMContentLoaded', () => {
    const slots = document.querySelectorAll('[data-include]');
    if (!slots.length) return;

    slots.forEach(async (slot) => {
      const url = slot.getAttribute('data-include');
      try {
        const resp = await fetch(url, { cache: 'no-cache' });
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        const html = await resp.text();

        // Sustituye el contenedor ENTERO por el fragmento
        slot.outerHTML = html;

        // Actualiza el año si el fragmento trae #copy-year
        const y = document.getElementById('copy-year');
        if (y) y.textContent = new Date().getFullYear();
      } catch (err) {
        console.error(`No se pudo incluir ${url}:`, err);
        slot.innerHTML = `
          <div class="container text-danger small my-3">
            Error al cargar la plantilla: ${url}
          </div>`;
      }
    });
  });
}
