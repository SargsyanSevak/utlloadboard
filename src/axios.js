import axios from "axios"

const instance = axios.create({
    baseURL: "https://utlloadboard-api.vercel.app/"
})

export default instance