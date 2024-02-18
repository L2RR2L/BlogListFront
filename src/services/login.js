
import axios from 'axios'
const baseUrl = '/api/login'


const login = async ({ username, password }) => {
    const credentials = {
        name: username,
        username: username,
        password: password
    }
    const response = await axios.post(baseUrl, credentials)

    return response.data
}


export default { login }
