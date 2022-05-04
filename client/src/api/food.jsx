import axios from "./axiosConfig";
import axiosMethod from "./axiosmethod";
import { GetAllFoodRedux } from '../redux/Cart/cart-action';
const getAllFood = () => {
    return axios.get('/food')
};

const getMenuFood = (id) => {
    return axios.get(`/food/getAllFood/${id}`)
};


export default {
    getAllFood,
    getMenuFood
};
