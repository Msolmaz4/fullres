import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Carts from "./components/Carts";
import { UserProvider } from "./Auth/Auth";
import Public from "./routes/Private";
import Private from "./routes/Private";
import Add from "./components/Add"
import Dene2 from "./components/Dene2";

function App() {
  return (
   
 <Router>
   <UserProvider>
      <Routes>

        <Route element={<Public/>}>
        <Route path="/login" element={<Login />} />
        <Route path="/deneme" element={<Dene2 />} />

        <Route path="/" element={<Register />} />
        </Route>
       
        <Route element={<Private/>}> 
        <Route path="carts" element={<Carts />} />
        <Route path="add" element={<Add />} />
        </Route>
        
        <Route path="*" element="malesef" />
      </Routes>
      </UserProvider>
    </Router>
    
   
   
  );
}

export default App;
