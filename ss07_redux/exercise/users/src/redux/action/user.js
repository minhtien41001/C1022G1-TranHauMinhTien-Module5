import userService from "../service/userService";
import { DELETE_USERS, GET_ALL_USERS } from "./type";

export const getAll = () => async (dispatch) =>{
    try {
        const res  = await userService.getAll();
        dispatch({
            type: GET_ALL_USERS,
            payload: res.data,
        })
    } catch (error) {
        console.log(error);
    }
};

export const deleteById = () => async (dispatch) =>{
    try {
        const res  = await userService.deleteById();
        dispatch({
            type: DELETE_USERS,
            payload: res.data,
        })
    } catch (error) {
        console.log(error);
    }
};