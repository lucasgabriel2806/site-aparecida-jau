export default function Noticia({ noticia }) {
  if (!noticia) return null

  return (
    <div>
      <h2>{noticia.titulo}</h2>

      <img
        src={`http://localhost:5220${noticia.imagemCapa}`}
        alt={noticia.titulo}
      />
    </div>
  )
}