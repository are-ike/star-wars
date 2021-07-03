import React from "react";
import "./List.css";

const List = ({children, listType}) => {

	return (
		<div className={listType == "short" ? "short-list" : "default-list"}>
			{children}
		</div>
	)
}

export default List;