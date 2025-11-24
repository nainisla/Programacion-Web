export default function MovieDetails({ movie, onCerrar }) {
    if (!movie) return null;

    return (
        <div style={{
            border: "2px solid #333",
            padding: "15px",
            borderRadius: "8px",
            marginTop: "20px",
            maxWidth: "400px"
          }}>
            <h2>{movie.Title}</h2>
            <p>Año: {movie.Year}</p>
            <p>Tipo: {movie.Type}</p>
            <p>ID de IMDb: {movie.imdbID}</p>
            {movie.Poster && movie.Poster !== "N/A" && (
              <img src={movie.Poster} alt={movie.Title} style={{ width: "100%" }} />
            )}
            <button onClick={onCerrar} style={{ marginTop: "10px" }}>Cerrar</button>
          </div>
    );
}