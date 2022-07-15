import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-e8c77/us-central1/api'
});

export default instance;
