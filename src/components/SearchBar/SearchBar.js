import React, { useState, useCallback} from "react";
import "./SearchBar.css"
import { SearchOutlined } from '@material-ui/icons';
import { useHistory } from "react-router-dom"
import { useSearchValueContext } from "../../context/SearchValueContext"
import _ from "lodash";

const SearchBar = () => {
	const [searchInput, setSearchInput] = useState("")
	const { setSearchbarValue } = useSearchValueContext()
	const history = useHistory()


	const handleInputChange = (e) => {
		setSearchInput(e.target.value)
		setSearchbarValue(e.target.value)
	}
	const goToSearch = () => {
		history.push("/searchResults")
	}
	
	return (
		<div className="search-bar" onClick={goToSearch}>
			<SearchOutlined className="icon"/>
			<input onChange={handleInputChange} value={searchInput}></input>
		</div>
	)
}

export default SearchBar;