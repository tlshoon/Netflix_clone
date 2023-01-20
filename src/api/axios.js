import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "fc9d84d387b0f11db29703a5fe4baa4d",
    language: "ko-KR",
  },
});

export default instance;