import axios from "axios";

export const findAll = async () =>{
    try {
        const data = await axios.get("http://localhost:2001/books")
        return data.data
    }
    catch (err) {
        console.log(err);
    }
}

export const save = async (book) => {
    try {
        await axios.post("http://localhost:2001/books", { ...book });
    }
    catch (err) {
        console.log(err);
    }
}

export const deleteBook = async (id) => {
    try{
        await axios.delete("http://localhost:2001/books/" + id)
    }
    catch(err){
        console.log(err);
    }
}

export const findById = async (id) => {
    try{
        const book = await axios.get("http://localhost:2001/books/" + id)
        return book.data
    }
    catch(err){
        console.log(err);
    }
}

export const editBook = async(book) => {
    try{
        const editBook = await axios.put("http://localhost:2001/books/" + book.id)
        return editBook.data
    }
    catch(err){
        console.log(err);
    }
}

