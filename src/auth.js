import axios from "axios"

const auth = axios.create({
    baseURL: "https://utlloadboard-api.vercel.app/"
})

export default auth