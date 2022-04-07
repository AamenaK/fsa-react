import axios from "axios";

const host = 'https://file-uploads.herokuapp.com/';
const axiosInstance = axios.create({baseURL: host});


export default axiosInstance;