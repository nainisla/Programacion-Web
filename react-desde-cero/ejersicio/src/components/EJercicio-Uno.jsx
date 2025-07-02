import React, {useState} from "react";

const Contador = () => {
    const [contador, setContador] = useState(0); //El valor inicial es 0

    const sumar =  () => setContador(contador + 1);
    const restar = () => setContador(contador - 1);

    return(
        <div>
          <h1>Contador :{contador}</h1>
        
        <button onClick={sumar}>sumar</button>
        <button onClick={restar}>restar</button>    
        </div>
    );
}

export default Contador