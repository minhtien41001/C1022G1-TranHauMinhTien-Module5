import axios from "axios";

const API_PRODUCT = "http://localhost:8080/api/product/create";



export const saveProduct = async (product) => {
    try{
        await axios.post(API_PRODUCT,{...product})
        console.log(product);
    }
    catch(err){
        console.log(err);
    }
}

export const findAll = async () => {
    try{
        debugger
        const res = await axios.get(`http://localhost:8080/api/product`)
        return res.data
    }
    catch(err){
        console.log(err);
    }
}