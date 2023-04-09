import axios from "axios";
API_CUSTOMER = "http://localhost:2010/customer";
API_CUSTOMER_TYPE = "http://localhost:2010/customerType";

export const findAll = async () => {
    try{
        const res = await axios.get(API_CUSTOMER)
        return res.data
    }
    catch(err){
        console.log(err);
    }
}