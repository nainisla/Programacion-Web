import Usuario from './components/Usuario';
import './App.css'
import { Proveedor } from './components/proveedor/proveedor';
import { useEffect,useState } from 'react';
function App() {

const [characters,setCharacters] = useState([]);

useEffect(( )=>{
fetch("https://rickandmortyapi.com/api/character")
.then((data) => data.json())
.then((response) => setCharacters(response));
},[]);

return (
<>
{characters ? characters.map((item,index)=>(<p>(item.name)</p>)
) : (
    <> cargando ... </>
)}
hola mundo
<button>hola soy un boton</button>
<Usuario/>
<Proveedor/>
</>);
  
}

export default App
