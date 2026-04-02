import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function NoticiaDetalhe() {
  const { slug } = useParams()
  const [noticia, setNoticia] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:5220/api/noticias/slug/${slug}`)
      .then(res => res.json())
      .then(data => setNoticia(data))
      .catch(err => console.error(err))
  }, [slug])

  if (!noticia) return <p>Carregando...</p>

  return (
    <div>
      <h1>{noticia.titulo}</h1>

      <img
        src={`http://localhost:5220${noticia.imagemCapa}`}
        alt={noticia.titulo}
      />

      <div dangerouslySetInnerHTML={{ __html: noticia.conteudo }} />
    </div>
  )
}