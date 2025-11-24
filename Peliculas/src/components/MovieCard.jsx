export default function MovieCard({movie, onVerDetalles}){
    return (
        <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      borderRadius: "5px",
      width: "200px"
    }}>
      <h3>{movie.Title}</h3>
      <p>Año: {movie.Year}</p>
      <button onClick={() => onVerDetalles(movie.imdbID)}>
        Ver detalles
      </button>
    </div>
    );
}