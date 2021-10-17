import axios from 'axios'


export const exchangeAPI = axios.create({
    baseURL: 'https://api.exchangerate.host/'
})