import {shuffleArray} from "../../utils/utils.js";

export const students = [];

export const addStudent = (studentObj) =>{
    Object.keys(studentObj)
        .forEach(key=>{
            if(studentObj[key] === undefined || studentObj[key] === null)
                alert(`error: missing value for ${key}`)
        })

    students.push(studentObj);
}

export const shuffleStudents = ()=>{
    shuffleArray(students);
}

