import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import { UserProvider } from "./Auth/Auth";
import Public from "./routes/Private";
import Private from "./routes/Private";

function App() {
  return (
    <UserProvider>
 <BrowserRouter>
      <Routes>

        <Route element={<Public/>}>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
        </Route>
       
        <Route element={<Private/>}> 
        <Route path="cart" element={<Cart />} />
        </Route>
        
        <Route path="*" element="malesef" />
      </Routes>
    </BrowserRouter>
    </UserProvider>
   
   
  );
}

export default App;
