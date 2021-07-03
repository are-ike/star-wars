import React from "react";
import "./List.css";

const List = ({children, listType}) => {
	let style = "default-list"
	if(listType === "info"){
		style = "info-list"
	}else if(listType === "films"){
		style = "film-list"
	}
	return (
		<div className={style}>
			{children}
		</div>
	)
}

export default List;