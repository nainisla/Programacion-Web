import { useEffect } from "react";

function ComponentDidMount(){ 
 useEffect(() =>{
 console.log("Componenete montado");
 },[]);

 return(
    <div>
      <p>Componente Montado</p>
    </div>
);}


export default ComponentDidMount;