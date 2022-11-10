import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import { AuthContext } from "./Auth/Auth";

function App() {
  return (
    <AuthContext>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element="malesef" />
      </Routes>
    </BrowserRouter>
    </AuthContext>
  );
}

export default App;
