// 5effe50a6df69fb67e8569004a27a2bf2b3b94ec
import axios from 'axios'

export const key = '5effe50a6df69fb67e8569004a27a2bf2b3b94ec'

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4/',
  headers: {
    Authorization: `Bearer ${key}`
  }
})

export default api