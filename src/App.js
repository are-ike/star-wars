import React, { useEffect, createContext } from "react"; 
import Header from "../src/components/Header/Header";
import Sidebar from "../src/components/Sidebar/Sidebar";
import HomePage from "./pages/HomePage/HomePage";
import CharacterDetails from "./pages/CharacterDetails/CharacterDetails";
import SearchResults from "./pages/SearchResults/SearchResults";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";  
import {QueryClient, QueryClientProvider} from 'react-query'
import { FavouriteCharactersContextProvider as CharCTXProvider} from "./context/FavouriteCharactersContext"
import { SearchValueContextProvider as ValueCTXProvider} from "./context/SearchValueContext"
import "./App.css"


const App = () => {

  const queryClient = new QueryClient()
 
 
	return (
    <Router>
      <div className="main-container">
      <CharCTXProvider>
        <Sidebar/>
          <div className="page">
            <ValueCTXProvider>
              <Header/>

              <div className="page-body">
                <Switch>
                  <QueryClientProvider client={queryClient}>
                    <Route path="/" exact component={HomePage}/>
                      <Route path="/searchResults" exact component={SearchResults}/>
                    <Route path="/character/:id" component={CharacterDetails}/>
                  </QueryClientProvider>
                </Switch>
              </div>
            </ValueCTXProvider>
          </div>
      </CharCTXProvider>




      </div>

    </Router>
	);
};

export default App;
