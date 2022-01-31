
import "./App.css";
import React,{useState,useEffect} from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Movies from "./components/Movies";
import { FetchMovies } from "./api/movie";




function App() {
  const [movies, setMovies] = React.useState([]);
  const [Loading, setLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = useState(null);


  
  useEffect(() => {
      FetchMovies()
      .then(res => {
        setMovies(res);
        setLoading(false);
        console.log(res.results);
      })
  },[])


  const search = searchValue => {
      setLoading(true);
      setErrorMessage(null);
      FetchMovies(`/?s=${searchValue}`)
      .then(res => {
        setMovies(res);
        setLoading(false);
      })
    
  }





  return (
    <div className="App">
      <Header />
      <Search search={search} />
      {Loading && !errorMessage ? (<span>Loading...</span>) : errorMessage? 
      <div className="errorMessage">{errorMessage}</div> : 
      movies?.map(movie => (
        <Movies key={movie.id} movie={movie} />
      ))
    }
      
    </div>
  );
}

export default App;
