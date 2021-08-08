import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://berify-reverse-image-search-berify-com-v1.p.rapidapi.com/'
})

export default instance