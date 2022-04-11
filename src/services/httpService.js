import axios from "axios";

const host = 'https://fsa-nodeapi.herokuapp.com/';
const axiosInstance = axios.create({baseURL: host});


export default axiosInstance;