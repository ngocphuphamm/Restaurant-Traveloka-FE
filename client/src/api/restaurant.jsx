import axios from "./axiosConfig";

const getAllRestarant = () => {
    return axios.get("/restaurant")
};

const getRestaurant = (id) => {
    return axios.get(`/restaurant/${id}`)
};

const postBookRestaurant = () => {
    return axios.post(`/bookrestaurant`)
};

const getBookRestaurant = () => {
    return axios.get(`/bookrestaurant`)
};

export default {
    getAllRestarant,
    getRestaurant,
    postBookRestaurant,
    getBookRestaurant,
};