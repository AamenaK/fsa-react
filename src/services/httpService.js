import axios from "axios";

const host = 'https://fsa-node-api.herokuapp.com/';
const axiosInstance = axios.create({baseURL: host});


export default axiosInstance;