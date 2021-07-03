import React, { useEffect, useState } from "react";
import "./Film.css"
import { getFilms } from "../../api/getFilms";
import { useQuery } from 'react-query'
import Loader from "../../assets/loader.gif"

const Film = ({filmUrl}) => {
	
	const [film, setFilm] = useState({})
	const { isLoading, error, data } = useQuery(['filmData', filmUrl], () => getFilms(filmUrl))

	useEffect(() => {
		if(data) setFilm(data.data)
	}, [data])

	if(isLoading){
		return (
			<div className="film">
				<img src={Loader} className="loader" alt="loader"/>
			</div>
		)
	}
	if(error){
		return (
			<div className="home-page">
				<h2>Error Loading Film</h2>
			</div>
		)
	}
	return (
		<div className="film">
			<div className="item">
				<h3>Title:</h3><h2>{film.title}</h2>
			</div>
			<div className="item">
				<p>Director: </p><p>{film.director}</p>
			</div>
			<div className="item">
				<p>Producer: </p><p>{film.producer}</p>
			</div>
			<div className="item">
				<p>Release Date: </p><p>{film.release_date}</p>
			</div>	
		</div>
	)
}

export default Film;