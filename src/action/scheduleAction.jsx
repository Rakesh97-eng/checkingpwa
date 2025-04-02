import axios from "axios";
import { addUser } from "../redux/userSlice";

export const schedulePoojaApi = () => {
    console.log("dddddd");
    return async (dispatch) => {
      dispatch(addUser({ isLoading: true }));
      return axios.get(`https://fakestoreapi.com/products`, "GET")
        .then((e) => {
          dispatch(addUser({ apiData: e?.data, isLoading: false }));
          return {sucess:true}
        })
        .catch((e) => {
          dispatch(addUser({ isLoading: false }));
          return {sucess:false}
        //   alert('failed')
        });
    };
  };