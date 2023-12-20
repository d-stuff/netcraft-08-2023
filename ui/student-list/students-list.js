import {students} from "../../app/students-list/students-service.js";

export const renderStudentsList = () => {
    const studentsContainerElement = document.getElementsByClassName('students-container')[0];

    const ulElement = document.createElement("ul");
    studentsContainerElement.appendChild(ulElement);
    students.forEach(studentObj => {
        const liElement = document.createElement("li");

        liElement.innerHTML = `
        ${studentObj.firstname} ${studentObj.lastname} 
        <span>
            <a href="${studentObj.pathname}">
                CV
            </a>
        </span>`.trim();
        ulElement.appendChild(liElement);
    });
}
