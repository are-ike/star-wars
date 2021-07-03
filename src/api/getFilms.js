import axios from "axios"

export const getFilms = async (filmUrl) => {
	const res = await axios.get(filmUrl)
	return res
}


