// Importa funções comuns (menu responsivo, etc.)
import "./main.js";

// -----------------------------
// Carregar eventos de JSON
// -----------------------------
const eventsContainer = document.querySelector("#events-list");

async function loadEvents() {
    try {
        const response = await fetch("data/events.json");

        if (!response.ok) {
            throw new Error(`Error fetching events: ${response.status}`);
        }

        const events = await response.json();

        // Garantir que temos pelo menos 15 itens
        if (events.length < 15) {
            console.warn("Less than 15 events in the JSON file.");
        }

        renderEvents(events);
    } catch (error) {
        console.error("Error fetching events:", error);
        eventsContainer.innerHTML = `<p>Unable to load events at this time.</p>`;
    }
}

function renderEvents(events) {
    eventsContainer.innerHTML = events.map(event => `
        <article class="event-card">
            <img src="${event.image}" alt="${event.title}" loading="lazy">
            <h3>${event.title}</h3>
            <p><strong>Data:</strong> ${new Date(event.date).toLocaleDateString('en-US')}</p>
            <p><strong>Local:</strong> ${event.location}</p>
            <p>${event.description}</p>
            <button class="details-btn" data-id="${event.id}">See more</button>
        </article>
    `).join("");

    attachModalEvents();
}

// -----------------------------
// Modal para detalhes do evento
// -----------------------------
function attachModalEvents() {
    const buttons = document.querySelectorAll(".details-btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            alert(`Detalhes do evento ID: ${btn.dataset.id}`);
            // Aqui futuramente abriremos um modal estilizado
        });
    });
}

// Inicialização
loadEvents();