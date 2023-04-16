import axios from "axios";

const API_CLASS = "http://localhost:8080/classes";

export const findAllClass = async () => {
    try{
        const res = await axios.get(API_CLASS)
        return res.data
    }
    catch(err){
        console.log(err);
    }
}