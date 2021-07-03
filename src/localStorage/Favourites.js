export const storeFavourite = (favouriteCharacter) => {
	let favourites = []
	if(!localStorage.getItem("favourites")){
		favourites = []
	}else{
		favourites = JSON.parse(localStorage.getItem("favourites"));
	}
	favourites.push(favouriteCharacter)
	localStorage.setItem("favourites", JSON.stringify(favourites) )
	
}

export const storeFavourites = (favourites) => {
	localStorage.setItem("favourites", JSON.stringify(favourites))
}
export const getFavourites = () => 
localStorage.getItem("favourites") ? JSON.parse(localStorage.getItem("favourites")) : []