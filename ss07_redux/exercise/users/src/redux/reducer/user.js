import { DELETE_USERS, GET_ALL_USERS } from "../action/type";

const initialState = []
const userReducer = (users = initialState, action) =>{
    const{type, payload} = action;

    switch (type) {
        case GET_ALL_USERS:
            
            return payload
        
            case DELETE_USERS:

            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload),
                error: null,
                loading: false
            };
    
    default:
        return users;
}
};

export default userReducer