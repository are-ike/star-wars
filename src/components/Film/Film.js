import React, { useEffect, useState } from "react";
//import "./ListItem.css"
import { getFilms } from "../../api/getFilms";
import { useQuery } from 'react-query'

const Film = ({filmUrl}) => {
	
	const [film, setFilm] = useState({})
	const { isLoading, error, data } = useQuery(['filmData', filmUrl], () => getFilms(filmUrl))

	useEffect(() => {
		if(data) setFilm(data.data)
	}, [data])

	return (
		<div className="list-item">
			{film.title}
		</div>
	)
}

export default Film;