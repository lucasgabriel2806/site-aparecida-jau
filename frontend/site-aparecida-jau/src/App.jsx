import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";

import HistoriaDaParoquia from './pages/HistoriaDaParoquia.jsx';
import HorariosDeMissa from './pages/HorariosDeMissa.jsx';
import Contato from './pages/Contato.jsx';
import BoletimInfo from "./pages/BoletimInfo.jsx";
import Login from "./pages/Login.jsx";
import PrivateRoute from "./routes/PrivateRoute";
import Admin from "./pages/Admin";
import CriarBoletimInfo from "./pages/CriarBoletimInfo";
import CriarNoticia from "./pages/CriarNoticia.jsx";
import Noticias from "./pages/Noticias.jsx";
import NoticiaDetalhe from "./pages/NoticiaDetalhe";

function App() {

  return (
    <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route path="/paroquia/historia-da-paroquia" element={<HistoriaDaParoquia />} />
        <Route path="/paroquia/horarios-de-missa" element={<HorariosDeMissa />} />
        <Route path="/boletim-info" element={<BoletimInfo />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={ <PrivateRoute><Admin /></PrivateRoute> }/>
        <Route path="/criar-boletim-info" element={ <PrivateRoute><CriarBoletimInfo /></PrivateRoute> } />
        <Route path="/criar-noticia" element={ <PrivateRoute><CriarNoticia /></PrivateRoute> } />
        <Route path="/noticias" element={ <Noticias /> } />
        <Route path="/noticias/:slug" element={<NoticiaDetalhe />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App;