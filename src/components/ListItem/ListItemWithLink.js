import React from "react";
import "./ListItem.css"
import { Link } from "react-router-dom"
import { RemoveCircleOutline } from '@material-ui/icons';
import { useFavouriteCharactersContext } from "../../context/FavouriteCharactersContext"

const ListItemWithLink = ({characterID, characterName, hasIcon}) => {
	const {removeFromFavourites} = useFavouriteCharactersContext()
	
	return (
		<div className={hasIcon ? "list-item-link" : "list-item"}>
			<Link to={`/character/${characterID}`} className="link">
				<p>{characterName}</p>
			</Link>
			{hasIcon ? 
				<RemoveCircleOutline 
					onClick={() => removeFromFavourites(characterID)}
					className="icon"
				/>
				:
				null
			}
		</div>
	)
}

export default ListItemWithLink;