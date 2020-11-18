import axios from 'axios'

const METHOD = 'https://jsonplaceholder.typicode.com'

const getUsers = () => axios.get(`${METHOD}/users`)

export default { getUsers }
