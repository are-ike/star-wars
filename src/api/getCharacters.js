import axios from "axios"

export const getCharacters = async (pageNumber) => {
	const res = await axios.get(`https://swapi.dev/api/people/?page=${pageNumber}`)
	
	return res
}

export const getCharacterDetails = async (characterID) => {
	const res = await axios.get(`https://swapi.dev/api/people/${characterID}`)
	
	return res
}

