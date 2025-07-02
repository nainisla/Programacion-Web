import React, {useState} from "react";

const Texto = () => {
    const [Texto, setTexto] = useState(''); //El valor inicial es 0

    const manejarCambios = (e) => {
        setTexto(e.target.value)
    }

    return(
        <div>
          <input type="text" value={Texto} onChange={manejarCambios}></input>
          <p>valor actual del input:{Texto}</p>
        </div>
    );
}

export default Texto