import axios from "axios";

const API_CLUB = "http://localhost:2001/clubs   ";

export const findAllClub = async () => {
    try{
       const res = await axios.get(API_CLUB)
       return res.data
    }
    catch(err){
        console.log(err);
    }
}