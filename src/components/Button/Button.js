import React, { useMemo } from "react";
import { useFavouriteCharactersContext } from "../../context/FavouriteCharactersContext"
import "./Button.css"

const Button = ({characterData}) => {	
	const { characters, addToFavourites, removeFromFavourites} = useFavouriteCharactersContext()	

	const isFavouriteCharacter = useMemo(() => {
		for(let i = 0; i< characters.length; i++){
			if(characters[i].characterID === characterData.characterID){
				return true
			}
		}
		return false

	}, [characters, characterData.characterID])

	return (
		<button className="btn" 
			onClick={isFavouriteCharacter ? 
			() => removeFromFavourites(characterData.characterID) 
			:
			() => addToFavourites(characterData)}>
			{isFavouriteCharacter ? "Remove From Favourites": "Add To Favourites"}
			
		</button>
	)
}

export default Button;