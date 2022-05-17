import _axios from "axios";

const axios = (baseURL) => {
  const instance = _axios.create({
    baseURL:
      baseURL ||
      "https://my-json-server.typicode.com/redsnowchou/Onedays-website-api/",
    timeout: 1000,
  });

  return instance;
};

export { axios };

export default axios();
