import React, { createContext, useContext, useState, useEffect } from "react"

const SearchValue = createContext()
export const SearchValueContextProvider = ({children}) => {
	const [searchbarValue, setSearchbarValue] = useState("")

	return (
		<SearchValue.Provider
			value={{searchbarValue, setSearchbarValue}}>
			{children}
		</SearchValue.Provider>
	)
}

export const useSearchValueContext = () => {
	const values = useContext(SearchValue)
	
	return values
}

 