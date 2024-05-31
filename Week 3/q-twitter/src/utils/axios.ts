import axios from "axios";
const Axios = axios.create({
  baseURL: process.env.BASE_API_URL,
});
export default Axios;
