import { useEffect, useState } from "react"
import AlbumCard from "../Components/AlbumCard"
import Heading from "../Components/Heading"

export default function Albuns() {
  const [albuns, setAlbuns] = useState([])
  const [busca, setBusca] = useState("")

  useEffect(() => {
    fetch("http://localhost:5220/api/albuns")
      .then(res => res.json())
      .then(data => setAlbuns(data))
      .catch(err => console.error(err))
  }, [])

  const albunsFiltrados = albuns.filter(album =>
    album.titulo.toLowerCase().includes(busca.toLowerCase())
  )

  return (
    <div className="flex justify-center mt-[40px] mb-[100px]">

      <div className="w-[1200px] flex flex-col gap-[40px]">

        <Heading>Álbuns</Heading>

        <p>
          Confira registros fotográficos das missas,
          eventos e momentos especiais da paróquia.
        </p>

        <div className="flex">
          <input
            className="
              w-[250px]
              h-[45px]
              border
              border-[#ccc]
              rounded-[999px]
              px-[20px]
            "
            type="text"
            placeholder="Buscar álbum..."
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>

        {albunsFiltrados.length === 0 && (
          <p>Nenhum álbum encontrado.</p>
        )}

        <div className="grid grid-cols-3 gap-[30px]">

          {albunsFiltrados.map(album => (
            <AlbumCard
              key={album.id}
              album={album}
            />
          ))}

        </div>

      </div>

    </div>
  )
}