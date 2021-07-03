import React, { useState, useEffect } from "react";
import ListItem from "../ListItem/ListItemWithLink"
import { KeyboardArrowRight, KeyboardArrowLeft} from '@material-ui/icons';
import { useFavouriteCharactersContext } from "../../context/FavouriteCharactersContext"
import "./Sidebar.css"

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const {characters } = useFavouriteCharactersContext()


	const closeSidebar = (e) => {
		if(e.target.className === "overlay"){
			setIsOpen(false)
		}
	}
	
	return (
		<div className={isOpen ? "overlay": ""} onClick={closeSidebar}>
			<div className={isOpen ? "sidebar-open" : "sidebar-closed"}>
				{isOpen ? 
				<div className="sidebar-content" onClick={() => setIsOpen(false)}>
					<div className="heading">
						<KeyboardArrowLeft
							className="sidebar-icon close"
							onClick={() => setIsOpen(false)}
						/>
						<p>Favourites</p>
					</div>
					{characters.map(character => <ListItem {...character } key={character.characterID} hasIcon={true}/>)}
				</div>
					
					:
					<KeyboardArrowRight
						className="sidebar-icon"
						onClick={() => setIsOpen(true)}
					/>
				} 
			</div>

		</div>
		)
			
	
}

export default Sidebar;