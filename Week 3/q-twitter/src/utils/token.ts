import Axios from "./axios";

const setToken = (token: string) => {
  if (token) {
    Axios.defaults.headers.common["jwt"] = token;
  } else {
    delete Axios.defaults.headers.common["jwt"];
  }
};

export default setToken;
