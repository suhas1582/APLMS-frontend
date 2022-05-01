import axios from "axios";
import { baseUrl, apiAuthToken } from "./constants";

const signin = async (username, password) => {
  const url = `${baseUrl}${apiAuthToken}`;
  const body = { username, password };
  return axios
    .post(url, body)
    .then((response) => {
      return {
        token: response.data.token,
      };
    })
    .catch((err) => {
      const error = err.response.data["non_field_errors"];
      return {
        error,
      };
    });
};

export { signin };
