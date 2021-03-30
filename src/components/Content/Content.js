import React, { useEffect } from 'react'
import { sendRequest } from '../../utils/axios'

sendRequest()


export const Content = () => {
	useEffect(() => {
		sendRequest()
	}, [])
	return (
		<h1>hello Shuha</h1>
	)
}