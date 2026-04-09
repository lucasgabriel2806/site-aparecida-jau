import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Title from "../Components/Title"

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

  const data = new Date(noticia.data)

  return (
    <div className="flex justify-center">
      <div className="w-[1000px] pt-[50px]">

        <Title>{noticia.titulo}</Title>

        <p className="text-[20px] text-[#555] mt-[15px]">
          {noticia.subtitulo}
        </p>

        <p className="text-[14px] text-[#888] mt-[10px]">
          Por <span className="font-semibold">{noticia.autor}</span> •{" "}
          {data.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric"
          })} às{" "}
          {data.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit"
          })}
        </p>

        <div className="flex flex-col items-center mt-[50px]">
          <img
            className="rounded-[15px] w-[1000px] h-[700px]"
            src={`http://localhost:5220${noticia.imagemCapa}`}
            alt={noticia.titulo}
          />
        </div>

        <div
          className="flex flex-col gap-[25px] w-[700px] mt-[50px] text-[18px] text-justify [&_img]:rounded-[15px]"
          dangerouslySetInnerHTML={{ __html: noticia.conteudo }}
        />

      </div>
    </div>
  )
}