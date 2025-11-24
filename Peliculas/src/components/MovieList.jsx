import MovieCard from "./MovieCard";

export default function ListaPeliculas({movies, onVerDetalles}) {
  return (
    <div style={{ 
        display: "flex", 
        flexWrap: "wrap", 
        gap: "10px", 
        marginTop: "20px" }}>
        {movies.map((m, index) => (
        <MovieCard 
        key={`${m.imdbID}-${index}`} 
        movie={m} 
        onVerDetalles={onVerDetalles} />
    ))}
  </div>
  );
}