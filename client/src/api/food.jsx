import axios from "./axiosConfig";
import axiosMethod from "./axiosmethod";
import { GetAllFoodRedux } from '../redux/Cart/cart-action';
const getAllFood = () => {
    return axios.get('/food')
};

const getMenuFood = (id) => {
    return axios.get(`/food/getAllFood/${id}`)
};

const searchFood = (id) => {
    return axios.get(`/food/search/${id}`)
}

export const actFetchFoodRequest = async (id) => {
    return async  (dispatch) => {
        return axiosMethod(`/food/getAllFood/${id}`,'GET',null) 
                .then(res=>
                    {
                        dispatch(GetAllFoodRedux(res.data))
                    });
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAllFood,
    getMenuFood,
    searchFood,
};
