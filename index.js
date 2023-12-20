import {renderStudentsList} from "./ui/student-list/students-list.js";
import {initStudents} from "./app/students-list/students-init.js";

document.addEventListener("DOMContentLoaded", function(){
    initStudents();
    renderStudentsList();
});
