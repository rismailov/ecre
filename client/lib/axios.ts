import Axios from "axios";

const axios = Axios.create({
    withCredentials: true,
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        "X-Requested-With": "XMLHttpRequest",
    },
});

export default axios;
