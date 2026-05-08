import { Link } from "react-router-dom"

export default function AlbumCard({ album }) {
  return (
    <Link to={`/albuns/${album.slug}`}>
      <div className="flex flex-col gap-[10px] hover:scale-[1.02] duration-200">

        <img
          className="w-full h-[250px] object-cover rounded-[20px]"
          src={`http://localhost:5220${album.capa}`}
          alt={album.titulo}
        />

        <div className="flex flex-col gap-[5px]">
          <h2 className="text-[22px] font-bold">
            {album.titulo}
          </h2>

          <p className="text-[#666]">
            {album.descricao}
          </p>
        </div>

      </div>
    </Link>
  )
}