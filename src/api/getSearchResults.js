import axios from "axios"

export const getSearchResults = async (searchValue, pageNumber) => {
	const res = await axios.get(`https://swapi.dev/api/people/?search=${searchValue}&page=${pageNumber}`)
	return res
}