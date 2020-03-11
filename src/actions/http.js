import axios from "axios";

const http = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users"
});

export default http;
