document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-include]").forEach(el => {
        fetch(el.dataset.include)
            .then(response => response.text())
            .then(html => el.innerHTML = html);
    });
});