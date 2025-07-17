import byuiCourse from "./course.mjs";
import { setSectionSelection } from "./sections.mjs";
import { setTitle, renderSections } from "./output.mjs";

function changeEnrollment(sectionNumber, add = true) {
    const index = byuiCourse.sections.findIndex(
        (section) => section.sectionNumber == sectionNumber
    );
    if (index >= 0) {
        if (add) {
            byuiCourse.sections[index].enrolled++;
        } else {
            byuiCourse.sections[index].enrolled--;
        }
        renderSections(byuiCourse.sections);
    }
}

document.querySelector("#enrollStudent").addEventListener("click", () => {
    const sectionNum = Number(document.querySelector("#sectionNumber").value);
    if (sectionNum) changeEnrollment(sectionNum);
});

document.querySelector("#dropStudent").addEventListener("click", () => {
    const sectionNum = Number(document.querySelector("#sectionNumber").value);
    if (sectionNum) changeEnrollment(sectionNum, false);
});

setTitle(byuiCourse);
setSectionSelection(byuiCourse.sections);
renderSections(byuiCourse.sections);