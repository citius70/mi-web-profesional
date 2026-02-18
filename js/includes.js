document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll("[data-include]");

  elementos.forEach(el => {
    const file = el.getAttribute("data-include");
    if (!file) return;

    fetch(file)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error al cargar ${file}: ${response.status}`);
        }
        return response.text();
      })
      .then(html => {
        el.innerHTML = html;
      })
      .catch(err => {
        console.error(err);
        el.innerHTML = "<!-- Error al cargar include -->";
      });
  });
});