import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com/users'

export const sendRequest = axios.get(URL)
	.then(response => console.log(response.data))
	.then((err => console.log(err)))