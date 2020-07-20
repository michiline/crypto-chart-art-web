export const getPostByUrl = async (data) => {
	const response = await fetch(`${process.env.REACT_APP_API_URL}${url}`)
	// if (response.status >= 400 && response.status <= 499) {
	// 	throw new Error('Api client error')
	// }
	return response.json()
}

export const getRequest = async ({ url }) => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
		method: 'GET'
	})
	return response
}


const postRequest = async ({ url, data = {} }) => {
	const response = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(data)
	})
	return response.json()
  }