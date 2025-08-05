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
        console.log(`Sua última visita foi há ${daysDiff} dias.`);
        // Aqui você pode exibir essa informação no DOM se quiser
    } else {
        console.log("Bem-vindo! Esta é sua primeira visita.");
    }

    localStorage.setItem("lastVisit", now);
});