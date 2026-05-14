import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import HistoriaDaParoquia from './pages/HistoriaDaParoquia.jsx';
import HorariosDeMissa from './pages/HorariosDeMissa.jsx';
import Contato from './pages/Contato.jsx';
import BoletimInfo from "./pages/BoletimInfo.jsx";
import Login from "./pages/Login.jsx";
import Admin from "./pages/Admin.jsx";
import CriarBoletimInfo from "./pages/CriarBoletimInfo.jsx";
import CriarNoticia from "./pages/CriarNoticia.jsx";
import Noticias from "./pages/Noticias.jsx";
import NoticiaDetalhe from "./pages/NoticiaDetalhe.jsx";
import CriarAlbum from "./pages/CriarAlbum.jsx";
import Albuns from "./pages/Albuns.jsx";
import AlbumDetalhe from "./pages/AlbumDetalhe.jsx";

import PrivateRoute from "./routes/PrivateRoute.jsx";

import MainLayout from "./layouts/MainLayout.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* SITE */}

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

          <Route
            path="/paroquia/historia-da-paroquia"
            element={<HistoriaDaParoquia />}
          />

          <Route
            path="/paroquia/horarios-de-missa"
            element={<HorariosDeMissa />}
          />

          <Route
            path="/albuns"
            element={<Albuns />}
          />

          <Route
            path="/albuns/:slug"
            element={<AlbumDetalhe />}
          />

          <Route
            path="/boletim-info"
            element={<BoletimInfo />}
          />

          <Route
            path="/contato"
            element={<Contato />}
          />

          <Route
            path="/noticias"
            element={<Noticias />}
          />

          <Route
            path="/noticias/:slug"
            element={<NoticiaDetalhe />}
          />

        </Route>

        {/* LOGIN */}

        <Route element={<AuthLayout />}>

          <Route
            path="/login"
            element={<Login />}
          />

        </Route>

        {/* ADMIN */}

        <Route
          element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          }
        >

          <Route
            path="/admin"
            element={<Admin />}
          />

          <Route
            path="/criar-boletim-info"
            element={<CriarBoletimInfo />}
          />

          <Route
            path="/criar-noticia"
            element={<CriarNoticia />}
          />

          <Route
            path="/criar-album"
            element={<CriarAlbum />}
          />

        </Route>

      </Routes>

    </BrowserRouter>

  )

}

export default App;