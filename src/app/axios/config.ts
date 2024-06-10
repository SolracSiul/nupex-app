import axios from "axios";

const axiosFetch = axios.create({
    baseURL: "http://localhost:3001"
})

export default axiosFetch