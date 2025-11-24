export default function BuscadorPeliculas({query,setQuery, onBuscar}) {
  return (
    <div>
    <input
      type="text"
      placeholder="Buscar peliculas..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
    <button onClick={onBuscar}>Buscar</button>
  </div>
  );
}