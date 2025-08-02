// Mostrar mensagem da visita anterior
const messageArea = document.querySelector("#visitMessage");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    messageArea.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const daysDiff = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    if (daysDiff === 0) {
        messageArea.textContent = "Back so soon! Awesome!";
    } else if (daysDiff === 1) {
        messageArea.textContent = "You last visited 1 day ago.";
    } else {
        messageArea.textContent = `You last visited ${daysDiff} days ago.`;
    }
}

localStorage.setItem("lastVisit", now);

// Carregar e mostrar os cards
fetch("data/discover.json")
    .then((res) => res.json())
    .then((data) => {
        const container = document.getElementById("cardContainer");

        data.forEach((item) => {
            const card = document.createElement("section");
            card.classList.add("card");
            card.innerHTML = `
        <h2>${item.name}</h2>
        <figure><img src="${item.image}" alt="${item.name}"></figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button>Learn More</button>
      `;
            container.appendChild(card);
        });
    });