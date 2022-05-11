import { useState } from "react";
import UserContext from "./../provider/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageMain from "../pages/Main";
import PageLogin from "../pages/Login";

export default function Router() {
  const [API_URL] = useState("http://localhost:5000");
  const [user, setUser] = useState({
    name: "",
    email: "",
    token: "",
  });

  return (
    <UserContext.Provider value={{ user, setUser, API_URL }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageMain />} />
          <Route path="/login" element={<PageLogin />} />
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
