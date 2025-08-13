import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

export const NombreContext = React.createContext();

createRoot(document.getElementById("root")).render(
  <NombreContext.Provider value={Fede}>
    <StrictMode>
      <App />
    </StrictMode>
  </NombreContext.Provider>
);
