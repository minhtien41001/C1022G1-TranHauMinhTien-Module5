import axios from "axios";

export const findAll = async () => {
    try {
        const data = await axios.get("http://localhost:8080/todoList")
        return data.data
    }
    catch (err) {
        console.log(err);
    }
}

export const save = async (todo) => {
    try {
        await axios.post("http://localhost:8080/todoList", { ...todo });
    }
    catch (err) {
        console.log(err);
    }
};

