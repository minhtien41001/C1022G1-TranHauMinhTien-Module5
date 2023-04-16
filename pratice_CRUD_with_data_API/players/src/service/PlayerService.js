import axios from "axios";

const API_PLAYER = "http://localhost:2001/players";

export const findAllPlayer = async () => {
    try{
       const res = await axios.get(API_PLAYER);
       return res.data
    }
    catch(err){
        console.log(err);
    }
}

export const deleteById = async (id) => {
    try{
        await axios.delete(API_PLAYER + "/" + id)
    }
    catch(err){
        console.log(err);
    }
}

export const save = async (player) => {
    try{
        await axios.post(API_PLAYER + "/" ,{...player})
    }
    catch(err) {
        console.log(err);
    }
}

export const findById = async (id) => {
    try{
        const res = await axios.get(API_PLAYER + "/" + id)
        return res.data
    }
    catch(err){
        console.log(err);
    }
}

export const edit = async (player) => {
    try{
        await axios.put(API_PLAYER + `/${player.id}`,{...player})
    }
    catch(err){
        console.log(err);
    }
}