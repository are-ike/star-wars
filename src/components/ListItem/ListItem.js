import React from "react";
import "./ListItem.css"

const ListItem = ({property, value}) => {
	
	return (
		<div className="list-item">
			<p>{property}</p>
			<p>{value}</p>
		</div>
	)
}

export default ListItem;