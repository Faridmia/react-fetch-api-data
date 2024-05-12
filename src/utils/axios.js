import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_NEWS_URL
});

instance.defaults.headers.common['X-Api-Key'] = process.env.REACT_APP_NEWS_API_KEY;
// default holo akta object ar moddhe headers asa tar moddhe common nam a akta property nite hobe

export default instance;

