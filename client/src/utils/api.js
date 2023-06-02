import axios from "axios";

const baseUrl = "http://localhost:3000/";

//  USER

export const createUser = async (newUser) => {
  try {
    const { data } = await axios.post(`${baseUrl}user`, newUser);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async () => {
  try {
    const { data } = await axios(`${baseUrl}user`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

//  API

export const getCountries = async () => {
  try {
    const res = await axios(`${baseUrl}countries`);
    // console.log("apiiiiii", res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getStates = async (country) => {
  try {
    const res = await axios(`${baseUrl}states/${country}`);
    // console.log("ssssssstatesss", res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getCities = async (state) => {
  try {
    const res = await axios(`${baseUrl}cities/${state}`);
    // console.log("citiesssssss", res);
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
