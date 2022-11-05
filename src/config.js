import axios from "axios";

export const axiosInstance = axios.create({
   baseURL: "https://v-reactbooking.herokuapp.com",
});
