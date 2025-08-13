import { Persona2 } from "./Persona2";

export function Persona({ nombre }) {
  return (
    <>
      <h3>este es el componente Persona</h3>
      <div>hola{nombre}</div>
      <Persona2 />
    </>
  );
}
