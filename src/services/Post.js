import axios from "axios";

const Api = "https://fakestoreapi.com/products";

export const getProducts = async ()=>{
    const res = await axios.get(Api);
    return res?.data;
}

export const addProducts = async(data)=>{
    const res = await axios.post(Api,data);
    return res?.data
}