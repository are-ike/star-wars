import React, {useEffect, useState, useCallback} from "react";
import { useMutation } from 'react-query'
import { useSearchValueContext } from "../../context/SearchValueContext"
import { getSearchResults } from "../../api/getSearchResults"
import ListItem from "../../components/ListItem/ListItemWithLink"
import List from "../../components/List/List"
import { getCharacterID } from "../../Helper"
import ReactPaginate from 'react-paginate';
import "./SearchResults.css"
import Loader from "../../assets/loader.gif"
import _ from "lodash";

const SearchResults = () => {
	const [pageCount, setPageCount] = useState(0)
	const [currentPage, setCurrentPage] = useState(1)
	const [searchResultsList, setSearchResultsList] = useState([])
	const { isLoading, error, data, mutate } = useMutation(['searchResults', currentPage], (value) => getSearchResults(value, currentPage))
	const delayedSearch = useCallback(_.debounce(value => mutate(value), 500), []);
	const { searchbarValue } = useSearchValueContext()

	useEffect(() => {
		delayedSearch(searchbarValue)
	}, [searchbarValue, delayedSearch])

	useEffect(() => {
		setSearchResultsList(data?.data?.results ?? [])

		if(data && currentPage === 1){
			const itemsPerPage = data.data.results.length
			setPageCount(Math.ceil(data.data.count/itemsPerPage))
		}
	}, [data, currentPage])

	const handlePageChange = ({selected}) => {
		setCurrentPage(selected + 1)
	}

	if(isLoading){
		return (
			<div className="search-page">
				<img src={Loader} className="loader" alt="loader"/>
			</div>
		)
	}

	if(error){
		return (
			<div className="search-page">
				<h2>Error Loading Page</h2>
			</div>
		)
	}
	if(searchbarValue){
		return (
			<div className="search-page">
				<h2>No Results Found</h2>
			</div>
		)
	}
	return (
		<div className="search-page">
			<List>
				{searchResultsList.map(character => 
					<ListItem 
						characterID={getCharacterID(character)} 
						characterName={character.name}
						key={getCharacterID(character)}
				/>)}
			</List>
			<ReactPaginate
				pageCount={pageCount}
				pageRangeDisplayed={1}
				marginPagesDisplayed={1}
				breakLabel={'...'}
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

export default SearchResults;