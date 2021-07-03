export const getCharacterID = (character) => {
	//Remove first forward slash
	const newUrlString = character.url.slice(0, character.url.length - 1)

	const startIndexOfID = newUrlString.lastIndexOf("/") + 1
	const id = parseInt(newUrlString.slice(startIndexOfID, ))
	
	return id
}