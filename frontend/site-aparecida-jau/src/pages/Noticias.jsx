import { useEffect, useState } from "react"
import Noticia from "./../Components/Noticia"
import { Link } from "react-router-dom"

const Noticias = () => {
  const [noticias, setNoticias] = useState([])
  const [busca, setBusca] = useState("")

  useEffect(() => {
    fetch("http://localhost:5220/api/noticias")
      .then(res => res.json())
      .then(data => {
        setNoticias(data)
      })
      .catch(err => console.error("Erro:", err))
  }, [])

  // 🔎 FILTRO
  const noticiasFiltradas = noticias.filter(noticia =>
    noticia.titulo.toLowerCase().includes(busca.toLowerCase())
  )

  return (
    <div>
      <h1>Notícias</h1>

      {/* 🔎 CAMPO DE BUSCA */}
      <input
        type="text"
        placeholder="Buscar notícia..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "20px",
          borderRadius: "20px",
          border: "1px solid #ccc"
        }}
      />

      {/* 📰 LISTA */}
      {noticiasFiltradas.map(noticia => (
        <Link key={noticia.id} to={`/noticias/${noticia.slug}`}>
          <Noticia noticia={noticia} />
        </Link>
      ))}
    </div>
  )
}

export default Noticias