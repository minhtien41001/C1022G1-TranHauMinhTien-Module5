import axios from "axios";

const API_BOOK = "http://localhost:8080/books";

export const findAllBook = async (name = " ",categoryId = " ") => {
    try{
        const res = await axios.get(API_BOOK + "?name_like=" + name + "&categoryId_like=" + categoryId);
        return res.data
    }
    catch(err){
        console.log(err);
    }
}

export const save = async (book) => {
    try{
        await axios.post(API_BOOK + `/`,{...book})
    }
    catch(err){
        console.log(err);
    }
}

export const deleteById = async (id) => {
    try{
        await axios.delete(API_BOOK + "/" +id)
    }
    catch(err){
        console.log(err);
    }
}

export const findById = async (id) => {
    try{
        const res = await axios.get(API_BOOK + "/" + id)
        return res.data
    }
    catch(err){
        console.log(err);
    }
}

export const edit = async (book) => {
    console.log(book);
    try{
        await axios.put(API_BOOK + `/${book.id}`, { ...book })
    }
    catch(err){
        console.log(err);
    }
}