const { default: axios } = require("axios");

const commuteAxios = axios.create({
  baseURL: "https://snu-commute-v3latest-yi6gkqhzma-du.a.run.app/api",
});
export default commuteAxios;
