const directory = document.getElementById("directory");
const gridBtn = document.getElementById("grid");
const listBtn = document.getElementById("list");

async function fetchMembers() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();
    displayMembers(data);
  } catch (error) {
    console.error("Error loading members:", error);
  }
}

function displayMembers(members) {
  directory.innerHTML = ""; // Clear previous content
  members.forEach((member) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${member.image}" alt="Logo of ${member.name}">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p class="membership ${getMembershipClass(member.membership)}">
        ${getMembershipLabel(member.membership)}
      </p>
    `;

    directory.appendChild(card);
  });
}

function getMembershipLabel(level) {
  switch (level) {
    case 3: return "Gold Member";
    case 2: return "Silver Member";
    default: return "Member";
  }
}

function getMembershipClass(level) {
  switch (level) {
    case 3: return "gold";
    case 2: return "silver";
    default: return "standard";
  }
}

// Toggle Views
gridBtn.addEventListener("click", () => {
  directory.classList.add("grid-view");
  directory.classList.remove("list-view");
});

listBtn.addEventListener("click", () => {
  directory.classList.add("list-view");
  directory.classList.remove("grid-view");
});

// Last Modified Date
document.getElementById("lastModified").textContent = document.lastModified;

// Copyright Year
const currentYear = new Date().getFullYear();
const copyright =
  document.querySelector("footer p:last-child");
if (copyright)
  copyright.innerHTML += ` | &copy; ${currentYear}`;

// Fetch on load
fetchMembers();
