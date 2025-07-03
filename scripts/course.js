const courses = [
    { code: "WDD130", name: "Web Fundamentals", credits: 3, completed: true },
    { code: "WDD131", name: "Dynamic Web", credits: 3, completed: true },
    { code: "WDD231", name: "Front-end Frameworks", credits: 3, completed: false },
    { code: "CSE110", name: "Programming Principles", credits: 2, completed: true },
    { code: "CSE210", name: "OOP", credits: 4, completed: false }
];

function displayCourses(filteredCourses) {
    const container = document.getElementById('courseContainer');
    container.innerHTML = "";
    let total = 0;

    filteredCourses.forEach(course => {
        const card = document.createElement('div');
        card.className = course.completed ? 'card completed' : 'card';
        card.innerHTML = `<h3>${course.code}</h3><p>${course.name}</p><p>Credits: ${course.credits}</p>`;
        container.appendChild(card);
        total += course.credits;
    });

    document.getElementById('totalCredits').textContent = total;
}

document.getElementById('all').addEventListener('click', () => displayCourses(courses));
document.getElementById('wdd').addEventListener('click', () => displayCourses(courses.filter(c => c.code.includes("WDD"))));
document.getElementById('cse').addEventListener('click', () => displayCourses(courses.filter(c => c.code.includes("CSE"))));

displayCourses(courses);