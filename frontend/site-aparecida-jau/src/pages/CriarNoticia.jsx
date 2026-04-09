import { useState } from "react"
import Editor from "../Components/Editor"
import axios from "axios"
import Title from "./../Components/Title";

export default function CriarNoticia() {
  const [titulo, setTitulo] = useState("")
  const [subtitulo, setSubtitulo] = useState("")
  const [autor, setAutor] = useState("")
  const [conteudo, setConteudo] = useState("")
  const [imagem, setImagem] = useState(null)

  const handleSubmit = async () => {
    try {
        console.log("ENVIANDO...");

        const formData = new FormData()
        formData.append("titulo", titulo)
        formData.append("subtitulo", subtitulo)
        formData.append("autor", autor)
        formData.append("conteudo", conteudo)
        formData.append("imagemCapa", imagem)

        const response = await axios.post("http://localhost:5220/api/noticias", formData)

        alert("Notícia criada com sucesso!");
        console.log("SUCESSO:", response.data)
    } catch (error) {
        alert("Erro ao criar notícia");
        console.error("ERRO:", error)
    }
  }

  return (
    <div className="flex justify-center mt-[25px]">
      <div className="flex flex-col items-center gap-[25px] w-[800px]">

        <Title>Criar Notícia</Title>

        <p>Área de criação de Notícias</p>

        <div className="flex flex-col w-full">
          <label htmlFor="titulo">Título da Notícia</label>
          <input
            className="rounded-[10px] border border-[#ccc] p-2"
            id="titulo"
            onChange={e => setTitulo(e.target.value)}
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="subtitulo">Subtítulo</label>
          <input
            className="rounded-[10px] border border-[#ccc] p-2"
            id="subtitulo"
            onChange={e => setSubtitulo(e.target.value)}
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="autor">Autor</label>
          <input
            className="rounded-[10px] border border-[#ccc] p-2"
            id="autor"
            onChange={e => setAutor(e.target.value)}
          />
        </div>

        <Editor onChange={setConteudo} />

        <div className="flex gap-[10px] items-center">
          <label>Imagem da capa</label>
          <input
            className='hover:cursor-pointer border border-[#ccc] px-4 py-2 rounded-[10px]'
            type="file"
            onChange={e => setImagem(e.target.files[0])}
          />
        </div>

        <button
          className="hover:cursor-pointer bg-[#034389] text-white p-2 w-[200px] rounded-[25px] mb-[100px]"
          onClick={handleSubmit}
        >
          Criar Notícia
        </button>
      </div>
    </div>
  )
}