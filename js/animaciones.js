document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(".fade-in-up");

  if (!("IntersectionObserver" in window)) {
    // Si el navegador es viejo y no soporta IntersectionObserver:
    elementos.forEach(el => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // Si no quieres que se repita la animación al hacer scroll arriba/abajo:
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  elementos.forEach(el => observer.observe(el));
});