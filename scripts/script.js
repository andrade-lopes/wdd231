document.getElementById("menu-toggle").addEventListener("click", () => {
    document.getElementById("main-nav").classList.toggle("show");
});

document.getElementById("last-mod").textContent = document.lastModified;