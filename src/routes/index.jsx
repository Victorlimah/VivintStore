import { useState } from "react";
import UserContext from "./../provider/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageMain from "../pages/Main";
import PageLogin from "../pages/Login";
import PageRegister from "../pages/Register";
import PageHome from "../pages/Home";

export default function Router() {
  const [API_URL] = useState("https://api-vivint.herokuapp.com");
  const [user, setUser] = useState({
    name: "",
    token: "",
  });

  return (
    <UserContext.Provider value={{ user, setUser, API_URL }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageMain />} />
          <Route path="/login" element={<PageLogin />} />
          <Route path="/register" element={<PageRegister />} />
          <Route path="/home" element={<PageHome />} />
          <Route path="/" element={<h1>Colocar carrinho</h1>} />
          <Route path="/" element={<h1>Colocar categorias</h1>} />
          <Route path="/" element={<h1>Colocar produtos</h1>} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
