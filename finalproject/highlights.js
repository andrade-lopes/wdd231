// Get the elements
const modal = document.getElementById("myModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeBtn = document.querySelector(".close");

// Open modal
//openBtn.onclick = function (e) {
    //e.preventDefault(); // evita que o link recarregue a página
    //modal.style.display = "block";
//}

// All buttons with learn-more
document.querySelectorAll(".learn-more").forEach(button => {
    button.addEventListener("click", function (e) {
        e.preventDefault();
        modalTitle.textContent = this.getAttribute("data-title");
        modalText.textContent = this.getAttribute("data-text");
        modal.style.display = "block";
    });
});

// Close by clicking the X
closeBtn.onclick = () => modal.style.display = "none";

// Close by clicking outside the modal
window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
};