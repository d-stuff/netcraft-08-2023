import {addStudent, shuffleStudents} from "./students-service.js";

export const initStudents = ()=>{
//example
   addStudent({
      firstname:"Andrey",
      lastname:"Michaely",
      pathname:"/andrey-michaely/index.html"
   });
   addStudent({
      firstname:"Dummy",
      lastname:"Student",
      pathname:"/dummy-student/index.html"
   });
//TODO : add function call with the object that represents your first and last name - see the example above

   shuffleStudents();
}
