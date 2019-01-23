import axios from "axios";

let utils = {};

utils.ajax = axios.create({
  baseURL: "http://localhost/shopping"
});

export default utils;
