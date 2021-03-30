const requestURL = 'https://jsonplaceholder.typicode.com/users'


export const sendRequest = (method, url, body = null) => {
	return new Promise((resolve, reject) => { // Promisу так как мы работаем с асихронным запросом
		const xhr = new XMLHttpRequest()

		xhr.open(method, url)

		xhr.responseType = 'json' // этот метод распарсит ответ от сервера в обект javascript вернее в json

		xhr.setRequestHeader('Content-Type', 'application/json') // указываем headers 

		xhr.onload = () => {
			if (xhr.status >= 400) {
				reject(xhr.response) // reject мы выхываем когда у нас есть какаето ошибка
			} else {
				resolve(xhr.response) //если мы получаем успех если наш статус менше 400 го
			}

		}

		xhr.onerror = () => {
			reject(xhr.response); // для отлова ошибок типа network
		}

		xhr.send(JSON.stringify(body))
	})
}
// sendRequest('GET', requestURL) // это что касается GET запроса
// 	.then(
// 		data => console.log(data)
// 	)
// 	.catch(err => console.log(err))

const body = {
	name: 'shukhrat',
	age: '32'
}

sendRequest('POST', requestURL, body) // это что касается POST запроса
	.then(
		data => console.log(data)
	)
	.catch(err => console.log(err))

