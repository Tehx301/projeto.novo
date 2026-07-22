import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
/* import pagina from "./pages/pagina"; */
import Inicio from "./pages/telaInicial";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/pagina/:id" element={<pagina />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
