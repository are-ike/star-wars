import React from "react";
import "./Header.css"
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom"

const Header = () => {

	return (
		<div className="header">
			<Link to="/" className="link"><p>Home</p></Link>
			<SearchBar/>
		</div>
	)
}

export default Header;