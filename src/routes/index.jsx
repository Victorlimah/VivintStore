import { useState } from "react";
import UserContext from "./../provider/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Router() {
  const [token, setToken] = useState("");
  return (
    <UserContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Colocar main</h1>} />
          <Route path="/" element={<h1>Colocar login</h1>} />
          <Route path="/" element={<h1>Colocar registro</h1>} />
          <Route path="/" element={<h1>Colocar main</h1>} />
          <Route path="/" element={<h1>Colocar carrinho</h1>} />
          <Route path="/" element={<h1>Colocar categorias</h1>} />
          <Route path="/" element={<h1>Colocar produtos</h1>} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
