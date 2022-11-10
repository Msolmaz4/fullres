import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route path="*" element="malesef" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
