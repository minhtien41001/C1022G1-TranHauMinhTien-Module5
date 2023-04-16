import axios from "axios";

const API_CATEGORY = "http://localhost:8080/categorys";


export const findAllCategory = async () => {
    try{
        const res = await axios.get(API_CATEGORY)
        return res.data
    }
    catch(err){
        console.log(err);
    }
}