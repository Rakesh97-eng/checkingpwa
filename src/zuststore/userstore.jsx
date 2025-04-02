import axios from "axios";
import { create } from "zustand";

export const useStore = create(change=>({
    count:0,
    products:[],
    userDetails:{
        address:"",
        firstname:"",
        lastname:""
    },
    productsLoading:false,
    addCount:(count)=>change(state=>({count:state.count+count})),
    handleUserDetails:(name,value)=>change(state=>({userDetails:{...state.userDetails,[name]:value}})),
    getApiProducts:async()=>{
        try {
            change(()=>({productsLoading:true}))
            const res = await axios.get("https://fakestoreapi.com/products").then((data)=>{
                        change((state) => ({ products: [...state.products, ...data.data] }));
                        change((state) => ({ productsLoading: false}));
            });
        } catch (error) {
            console.error("Error fetching products:", error);
        }


    }
}))