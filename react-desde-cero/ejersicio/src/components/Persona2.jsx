import { useContext } from "react";
import { NombreContext } from "../main";

export function Persona2() {
  const nombre = useContext(NombreContext);

  return (
    <>
      <div>hola{nombre}</div>
    </>
  );
}
