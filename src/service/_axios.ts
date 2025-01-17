import axios from "axios";

const controller = new AbortController();

const _axios = axios.create({
  baseURL: "https://reqres.in/api",
  signal: controller.signal,
});

export default _axios;
export { controller };
