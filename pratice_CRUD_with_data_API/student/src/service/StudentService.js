import axios from "axios";

const API_STUDENT = "http://localhost:8080/students";


export const findAllStudent = async (name = " ", classId = " " ) => {
    try{
        const res = await axios.get(API_STUDENT+ "?name_like=" + name + "&classId_like=" + classId);
        return res.data
    }
    catch(err){
        console.log(err);
    }
}

export const save = async (student) => {
    try{
        await axios.post(API_STUDENT + `/`,{...student})
        console.log(student);
    }
    catch(err){
        console.log(err);
    }
}

export const deleteById = async (id) => {
    try{
        await axios.delete(API_STUDENT + "/" +id)
    }
    catch(err){
        console.log(err);
    }
}

export const findById = async (id) => {
    try{
        const res = await axios.get(API_STUDENT + "/" + id)
        return res.data
    }
    catch(err){
        console.log(err);
    }
}

export const edit = async (student) => {
    console.log(student);
    try{
        await axios.put(API_STUDENT + `/${student.id}`, { ...student })
    }
    catch(err){
        console.log(err);
    }
}