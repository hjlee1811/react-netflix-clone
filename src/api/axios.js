import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "7dff7ab5eedae977998681a59de3d8de",
    language: "ko-KR",
  },
});

export default instance;
