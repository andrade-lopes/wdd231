// -----------------------------
// Responsive Menu (Hamburger)
// -----------------------------
const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// -----------------------------
// Last Visit (Local Storage)
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now();

    if (lastVisit) {
        const daysDiff = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
        console.log(`Your last visit was ${daysDiff} days.`);
        // Aqui você pode exibir essa informação no DOM se quiser
    } else {
        console.log("Welcome! This is your first visit.");
    }

    localStorage.setItem("lastVisit", now);
});

// Pega os elementos
const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close");

// Abrir modal
openBtn.onclick = function (e) {
    e.preventDefault(); // evita que o link recarregue a página
    modal.style.display = "block";
}

// Fechar modal
closeBtn.onclick = function () {
    modal.style.display = "none";
}

// Fechar clicando fora do conteúdo
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}