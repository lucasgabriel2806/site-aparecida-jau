import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Title from "./../Components/Title"
import NoticiaCard from "../Components/NoticiaCard"

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

  const noticiasFiltradas = noticias.filter(noticia =>
    noticia.titulo.toLowerCase().includes(busca.toLowerCase())
  )

  return (
    <div className="flex flex-col items-center gap-[30px] mt-[25px]">
      <Title>Notícias</Title>

      <p>
        Confira as notícias da casa da Mãe, incluindo eventos. <br />
        Para uma busca mais exata, selecione a data da notícia.
      </p>

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

      <div className="grid grid-cols-3 gap-8">
        {noticiasFiltradas.map(noticia => (
          <Link key={noticia.id} to={`/noticias/${noticia.slug}`}>
            <NoticiaCard noticia={noticia} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Noticias