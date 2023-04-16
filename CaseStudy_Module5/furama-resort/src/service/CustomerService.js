import axios from "axios";

const API_CUSTOMER = "http://localhost:2010/customer";
const API_CUSTOMER_TYPE = "http://localhost:2010/customerType";

export const findAllCustomer = async () => {
    try{
        const res = await axios.get(API_CUSTOMER)
        return res.data
    }
    catch(err){
        console.log(err);
    }
}

export const findAllCustomerType = async () => {

    try{
        const res = await axios.get(API_CUSTOMER_TYPE)
        return res.data
    }
    catch(err){
        console.log(err);
    }
}

export const saveCustomer = async (customer) => {
    try{
        await axios.post(API_CUSTOMER,{...customer})
    }
    catch(err){
        console.log(err);
    }
}