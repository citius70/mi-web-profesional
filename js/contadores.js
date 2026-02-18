document.addEventListener("DOMContentLoaded", () => {
  const contadores = document.querySelectorAll(".contador");
  const seccionContadores = document.querySelector(".contadores-overlap");

  if (!contadores.length || !seccionContadores) return;

  let yaAnimado = false;

  // Función que anima un contador individual
  const animarContador = (elemento, duracion = 3000) => {
    const valorFinal = parseInt(elemento.getAttribute("data-valor"), 10);
    if (isNaN(valorFinal)) return;

    const fps = 60;
    const totalFrames = Math.round((duracion / 1000) * fps);
    let frameActual = 0;

    const animacion = setInterval(() => {
      frameActual++;
      const progreso = frameActual / totalFrames;
      // Usamos una función de easing (suavizado) tipo ease-out
      const valorActual = Math.round(valorFinal * (1 - Math.pow(1 - progreso, 3)));

      elemento.textContent = valorActual;

      if (frameActual >= totalFrames) {
        elemento.textContent = valorFinal; // nos aseguramos del valor final exacto
        clearInterval(animacion);
      }
    }, 1000 / fps);
  };

  const iniciarAnimacionContadores = () => {
    if (yaAnimado) return;
    yaAnimado = true;
    contadores.forEach(contador => animarContador(contador));
  };

  // Usamos IntersectionObserver para disparar la animación
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            iniciarAnimacionContadores();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(seccionContadores);
  } else {
    // Fallback para navegadores antiguos: animar inmediatamente
    iniciarAnimacionContadores();
  }
});