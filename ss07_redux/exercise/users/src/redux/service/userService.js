    import request from "../http-common";

    const getAll = () => {
        return request.get("/user")
    };

    const deleteById = (id) => {
        return request.delete("/user/" + id)
    };

    const userService = {
        getAll,deleteById
    }

    export default userService;