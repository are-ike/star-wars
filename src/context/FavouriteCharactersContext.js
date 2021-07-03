import React, { createContext, useContext, useState, useEffect } from "react"
import { getFavourites, storeFavourite, storeFavourites } from "../localStorage/Favourites";

const FavouriteCharacters = createContext()
export const FavouriteCharactersContextProvider = ({children}) => {
	const [characters, setFavouritesCharacters] = useState([])

	useEffect(() => {
		setFavouritesCharacters(getFavourites())
	}, [])

	const addToFavourites = (character) => {
		storeFavourite(character)
		setFavouritesCharacters(getFavourites())
	}

	const removeFromFavourites = (characterID) => {
		const newFavouriteCharacters = 
		getFavourites().filter(favCharacter => favCharacter.characterID !== characterID )
		storeFavourites(newFavouriteCharacters)
		setFavouritesCharacters(getFavourites())
	}
	
	return (
		<FavouriteCharacters.Provider
			value={{characters, addToFavourites, removeFromFavourites}}>
			{children}
		</FavouriteCharacters.Provider>
	)
}

export const useFavouriteCharactersContext = () => {
	const values = useContext(FavouriteCharacters)
	
	return values
}

 