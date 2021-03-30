const requestURL = 'https://jsonplaceholder.typicode.com/users'
// метод fetch взврашяет нам promise
// по умолчанию метод fetch выполняет метод GET


export  const sendRequest = (method, url) => {
	const headers = { 'Content-Type': 'application/json' }

	return fetch(url, {
		method: method,
		headers: headers,
	}).then(response => {
		if (response.ok) {
			return response.json()
		}
		return response.json().then(error => {
			const e = new Error('Что-то не нак')
			e.data = error //чтобы в дальнеешем с ней работать
			throw e
		})
	})
}


sendRequest('GET', requestURL) // это что касается GET запроса
	.then(
		data => console.log(data)
	)
	.catch(err => console.log(err))
