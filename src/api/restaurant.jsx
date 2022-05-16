import axios from "./axiosConfig";

const getAllRestarant = () => {
    return axios.get("/restaurant")
};

const getRestaurant = (id) => {
    return axios.get(`/restaurant/${id}`)
};

const searchRestaurant = (id) => {
    return axios.get(`/restaurant/search?q=${id}`)
}

const postBookRestaurant = (body) => {
    return axios.post(`/bookrestaurant`, body)
};

const getBookRestaurant = () => {
    return axios.get(`/bookrestaurant/list`)
};

export default {
    getAllRestarant,
    getRestaurant,
    postBookRestaurant,
    getBookRestaurant,
    searchRestaurant,
};