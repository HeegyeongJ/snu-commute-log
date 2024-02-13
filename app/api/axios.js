const { default: axios } = require("axios");

const commuteAxios = axios.create({
  baseURL: "https://snu-commute-v3latest-yi6gkqhzma-uc.a.run.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});
export default commuteAxios;
