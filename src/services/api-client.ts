import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6bccf0a80742471b9b22b3d6fcd6700e",
  },
});
