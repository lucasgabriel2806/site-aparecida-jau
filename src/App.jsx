import { BrowserRouter, Routes, Route } from "react-router-dom";

import Contato from './pages/Contato.jsx';

import Navbar from "./Components/Navbar.jsx";

function App() {

  return (
    <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route path="/contato" element={<Contato />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App;