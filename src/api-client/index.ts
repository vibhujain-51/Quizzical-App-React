import axios from "axios"

const base_url:string = "https://opentdb.com"

export const apiClientServices = axios.create({
    baseURL:base_url
})