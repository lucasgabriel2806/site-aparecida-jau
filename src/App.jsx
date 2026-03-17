import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";

import Contato from './pages/Contato.jsx';
import BoletimInfo from "./pages/BoletimInfo.jsx";

function App() {

  return (
    <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route path="/boletim-info" element={<BoletimInfo />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App;