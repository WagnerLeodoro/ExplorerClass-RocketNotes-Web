import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://explorerclass-rocketnotes-api.onrender.com',
})
