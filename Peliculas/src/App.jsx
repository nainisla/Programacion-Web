import { useState , useEffect } from "react";
import MovieDetails from "./components/MovieDetails";
import MovieSearch from "./components/MovieSearch";
import MovieList from "./components/MovieList";

export default function App(){
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
  console.log("API KEY:", API_KEY);
 
  useEffect(() => {
    if (selectedMovie) {
      console.log("película seleccionada:", selectedMovie);}
  }, [selectedMovie]);

  useEffect(() => {
    if (query) {
      localStorage.setItem("ultimaBusqueda", query);
      console.log("guardando última búsqueda:", query);}
  }, [query]);

  

  async function buscarPeliculas(){
    if (!query) return;
    setLoading(true);
    try{
      const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
      const data = await res.json();
      if (data.Response === "True"){setMovies(data.Search);}
      else { setMovies([]) }} 
      catch (error) {
      console.error("Error al buscar películas:", error);
      setMovies([]);
  }   finally {
      setLoading(false); 
      setHasSearched(true);
  }
}
 
 async function verDetalles(imdbID){
  const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`);
  const data = await res.json();
  if(data.Response === "True"){ setSelectedMovie(data)}
 }
 function cerrarDetalles(){
   setSelectedMovie(null);
 }

 return (
  <div>
    <h1>Buscador de Peliculas</h1>
    <MovieSearch
    query={query} 
    setQuery={setQuery} 
    onBuscar={buscarPeliculas} />
    {loading && <p>Cargando...</p>}
    {!loading && hasSearched && movies.length === 0 && query && (
    <p>No se encontraron resultados para "{query}"</p>)}
    <MovieList
    movies={movies} 
    onVerDetalles={verDetalles} />
    {selectedMovie && 
    <MovieDetails 
    movie={selectedMovie} 
    onCerrar={cerrarDetalles} />}
  </div>
 );
}
