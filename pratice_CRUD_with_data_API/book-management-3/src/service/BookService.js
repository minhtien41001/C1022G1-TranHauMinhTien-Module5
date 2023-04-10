import axios from "axios";

const API_URL_BOOKS = "http://localhost:8080/books"
const API_URL_CATEGORY = "http://localhost:8080/category"

export const findAll = async () => {
    try {
        const res = await axios.get(API_URL_BOOKS)
        return res.data
    }
    catch (err) {
        console.log(err);
    }
}

export const findAllCategory = async () => {
    try {
        const res = await axios.get(API_URL_CATEGORY)
        return res.data
    }
    catch (err) {
        console.log(err);
    }
}

export const save = async (book) => {
    try {
        await axios.post(API_URL_BOOKS, { ...book })
    }
    catch (err) {
        console.log(err);
    }
}

export const deleteById = async (id) => {
    try {
        await axios.delete(API_URL_BOOKS + "/" + id)
    }
    catch (err) {
        console.log(err);
    }
}

export const findById = async (id) => {
    try {
        const res = await axios.get(API_URL_BOOKS + "/" + id)
        return res.data
    }
    catch (err) {
        console.log(err);
    }
}

export const edit = async (book) => {
    try {
        await axios.put(API_URL_BOOKS + "/" + book.id, { ...book })
    }
    catch (err) {
        console.log(err);
    }
}