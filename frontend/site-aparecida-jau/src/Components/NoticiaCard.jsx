export default function NoticiaCard({ noticia }) {
  if (!noticia) return null

  return (
    <div className="flex flex-col gap-[15px] border border-[#ccc] rounded-[15px] w-[330px] h-[350px] p-4">
      <img 
        className="rounded-[10px] w-[300px] h-[200px]"
        src={`http://localhost:5220${noticia.imagemCapa}`}
        alt={noticia.titulo}
      />
      <h2 className="font-bold">{noticia.titulo}</h2>
    </div>
  )
}