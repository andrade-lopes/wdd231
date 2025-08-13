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