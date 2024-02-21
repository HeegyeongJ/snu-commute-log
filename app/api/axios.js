const { default: axios } = require("axios");

const commuteAxios = axios.create({
  baseURL: "http://13.125.53.208:8080/api",
});
export default commuteAxios;
