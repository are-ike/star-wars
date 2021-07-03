import React, { useEffect, useState } from "react";
import { useQuery } from 'react-query'
import { getCharacters } from "../../api/getCharacters"
import ListItemWithLink from "../../components/ListItem/ListItemWithLink"
import List from "../../components/List/List"
import { getCharacterID } from "../../Helper"
import ReactPaginate from 'react-paginate';
import Loader from "../../assets/loader.gif"
import "./HomePage.css"

const Home = () => {
	const [pageCount, setPageCount] = useState(0)
	const [currentPage, setCurrentPage] = useState(1)
	const [characters, setCharacters] = useState([])

	const { isLoading, error, data } = useQuery(['characterData', currentPage], () => getCharacters(currentPage))

	useEffect(() => {
		setCharacters(data?.data?.results ?? [])

		if(data && currentPage == 1){
			const itemsPerPage = data.data.results.length
			setPageCount(Math.ceil(data.data.count/itemsPerPage))
		}
		
	}, [data])

	const handlePageChange = ({selected}) => {
		setCurrentPage(selected + 1)
	}

	if(isLoading){
		return (
			<div className="home-page">
				<img src={Loader} className="loader"/>
			</div>
		)
	}
	if(error){
		return (
			<div className="home-page">
				<h2>Error Loading Page</h2>
			</div>
		)
	}
	return (
		<div className="home-page">
			<List>
				{characters.map(character => 
				<ListItemWithLink key={getCharacterID(character)} characterID={getCharacterID(character)} characterName={character.name}/>)}
			</List>
			<ReactPaginate
				pageCount={pageCount}
				pageRangeDisplayed={10}
				onPageChange={handlePageChange}
				containerClassName="pagination"
				previousLinkClassName="pagination-link"
				nextLinkClassName="pagination-link"
				disabledClassName="pagination-link-disabled"
				activeClassName="pagination-link-active"
			/>
		</div>
	)
}

		

export default Home;