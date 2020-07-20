export const millisToString = ({ date = new Date(Date.now()), showHours = true }) => {
	const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
	const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
	const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
	const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
	const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
	let string = `${day}.${month}.${date.getFullYear()}.`
	if (showHours) {
	  string = `${string} ${hours}:${minutes}:${seconds}`
	}
	return string
  }