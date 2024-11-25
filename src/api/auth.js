import axios from "axios";
import { BASE_URL, handleApiError } from "./helper";

const url = `${BASE_URL}/auth`;
console.log(url);

const signin = async (email, password) => {
  try {
    const { data } = await axios.post(`${url}/signin`, { email, password });
    return data;
  } catch (err) {
    return handleApiError(err);
  }
};

const signup = async (name, email, mobile, location, password, role) => {
  try {
    const { data } = await axios.post(`${url}/signup`, {
      name,
      email,
      mobile,
      location,
      password,
      role
    });
    return data;
  } catch (err) {
    return handleApiError(err);
  }
};



export { signin, signup };