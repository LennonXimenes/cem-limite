import axios from "axios";

function createApi() {
    return axios.create({
        baseURL: "https://api.tibiadata.com",
        timeout: 8000
    })
}

export const api = createApi();