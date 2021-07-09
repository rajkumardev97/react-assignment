import Axios from "axios"; 

// Add a request interceptor
Axios.interceptors.request.use(
  (config) => {  
    config.headers["Content-Type"] = "application/json"; 
    return config;
  },
  (error) => {
    Promise.reject(error.response);
  }
);

//Add a response interceptor
Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    return Promise.reject(error.response);
  }
);

export default Axios;
