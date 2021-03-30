import React, { useEffect } from 'react'
import { sendRequest } from '../../utils/fetch-get'




export const Content = () => {
	useEffect(() => {
		sendRequest()
	}, [])
	return (
		<h1>hello Shuha</h1>
	)
}