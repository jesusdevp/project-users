import axios from "axios";

const http = axios.create({
  baseURL: "https://reactjsteachingproj.herouapp.com"
});

export default http;
