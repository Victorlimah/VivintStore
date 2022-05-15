import { useState } from "react";
import UserContext from "./../provider/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageMain from "../pages/Main";
import PageLogin from "../pages/Login";
import PageRegister from "../pages/Register";
import PageHome from "../pages/Home";
import Category from "../pages/Category";
import PageProduct from "../pages/Product";
import PageCart from "../pages/Cart";
import PageHistoryOrder from "../pages/HistoryOrder";

export default function Router() {
  const [API_URL] = useState("https://api-vivint.herokuapp.com");
  //const [API_URL] = useState("http://localhost:5000");

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
          <Route path="/carrinho" element={<PageCart />} />
          <Route path="/categoria" element={<Category />} />
          <Route path="/produto" element={<PageProduct />} />
          <Route path="/historico" element={<PageHistoryOrder />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
