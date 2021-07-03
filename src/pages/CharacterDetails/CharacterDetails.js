import React, { useEffect, useState } from "react";
import "./CharacterDetails.css"
import List from "../../components/List/List"
import Button from "../../components/Button/Button"
import ListItem from "../../components/ListItem/ListItem"
import Film from "../../components/Film/Film"
import { getCharacterDetails } from "../../api/getCharacters"
import { useQuery } from 'react-query'
import Loader from "../../assets/loader.gif"

const CharacterDetails = ({match}) => {
	const characterID = match.params.id
	const [characterDetailsData, setCharacterDetailsData] = useState({})
	const { isLoading, error, data } = useQuery('characterDetailsData', () => getCharacterDetails(characterID))
	

	useEffect(() => {
		if(data){
			setCharacterDetailsData(data.data)
		}

	}, [data])

	
	if(isLoading){
		return (
			<div className="details-page">
				<img src={Loader} className="loader" alt="loader"/>
			</div>
		)
	}

	if(error){
		return (
			<div className="details-page">
				<h2>Error Loading Page</h2>
			</div>
		)
	}
	return (
		<div className="details-page">
			<Button 
				characterData={{characterID, characterName: characterDetailsData.name}}
			/>
			<List listType="short">
				<ListItem property="Name" value={characterDetailsData.name}/>
				<ListItem property="Birth Year" value={characterDetailsData.birth_year}/>
				<ListItem property="Gender" value={characterDetailsData.gender}/>
				<ListItem property="Mass" value={characterDetailsData.mass}/>
				<ListItem property="Height" value={characterDetailsData.height}/>
			</List>
			<h2 className="films-header">Films</h2>
			<List listType="films">
				{
					characterDetailsData?.films?.map(film => (
						<Film key={film} filmUrl={film}/>
					))
				}
			</List>
		</div>
	)
}

export default CharacterDetails;