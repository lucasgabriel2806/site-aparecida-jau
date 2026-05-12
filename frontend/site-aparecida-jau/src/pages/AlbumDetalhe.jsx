import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Heading from "../Components/Heading"

export default function AlbumDetalhe() {
  const { slug } = useParams()

  const [album, setAlbum] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:5220/api/albuns/${slug}`)
      .then(res => res.json())
      .then(data => setAlbum(data))
      .catch(err => console.error(err))
  }, [slug])

  if (!album) {
    return <p>Carregando...</p>
  }

  return (
    <div className="flex justify-center mt-[40px] mb-[100px]">

      <div className="w-[1200px] flex flex-col gap-[30px]">

        <Heading>{album.titulo}</Heading>

        <p className="text-[18px] text-[#666]">
          {album.descricao}
        </p>

        <p className="text-[#999]">
          {new Date(album.data).toLocaleDateString("pt-BR")}
        </p>

        <div className="columns-3 gap-[20px] space-y-[20px]">

          {album.fotos.map((foto, index) => (
            <img
              key={index}
              src={`http://localhost:5220${foto}`}
              alt=""
              className="
                w-full
                rounded-[20px]
                break-inside-avoid
                hover:scale-[1.01]
                duration-200
              "
            />
          ))}

        </div>

      </div>

    </div>
  )
}