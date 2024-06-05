import axios from "axios";
const Axios = axios.create({
  baseURL: "http://185.8.174.74:8080/api",
});
export default Axios;
