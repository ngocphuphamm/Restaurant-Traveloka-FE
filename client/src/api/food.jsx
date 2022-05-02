import axios from "./axiosConfig";

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