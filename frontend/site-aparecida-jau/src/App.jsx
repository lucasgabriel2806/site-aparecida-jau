import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";

import Contato from './pages/Contato.jsx';
import BoletimInfo from "./pages/BoletimInfo.jsx";
import Login from "./pages/Login.jsx";
import PrivateRoute from "./routes/PrivateRoute";
import Admin from "./pages/Admin";
import CriarBoletimInfo from "./pages/CriarBoletimInfo";

function App() {

  return (
    <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route path="/boletim-info" element={<BoletimInfo />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={ <PrivateRoute><Admin /></PrivateRoute> }/>
        <Route path="/criar-boletim-info" element={ <PrivateRoute><CriarBoletimInfo /></PrivateRoute> } />
      </Routes>

    </BrowserRouter>
  )
}

export default App;