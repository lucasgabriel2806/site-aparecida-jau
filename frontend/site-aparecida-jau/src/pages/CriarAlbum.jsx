import { useState } from "react"
import axios from "axios"
import Heading from "../Components/Heading"

export default function CriarAlbum() {
  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")
  const [imagens, setImagens] = useState([])

  const handleSubmit = async () => {
    try {
      const formData = new FormData()

      formData.append("titulo", titulo)
      formData.append("descricao", descricao)

      for (let i = 0; i < imagens.length; i++) {
        formData.append("imagens", imagens[i])
      }

      await axios.post(
        "http://localhost:5220/api/albuns",
        formData
      )

      alert("Álbum criado com sucesso!")

      setTitulo("")
      setDescricao("")
      setImagens([])
    } catch (error) {
      console.error(error)
      alert("Erro ao criar álbum")
    }
  }

  return (
    <div className="flex justify-center mt-[40px]">
      <div className="w-[800px] flex flex-col gap-[25px]">

        <Heading>Criar Álbum</Heading>

        <div className="flex flex-col gap-[10px]">
          <label>Título do álbum</label>

          <input
            className="border border-[#ccc] p-3 rounded-[10px]"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-[10px]">
          <label>Descrição</label>

          <textarea
            className="border border-[#ccc] p-3 rounded-[10px] h-[120px]"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-[10px]">
          <label>Fotos do álbum</label>

          <input
            className="border border-[#ccc] p-2 rounded-[10px]"
            type="file"
            multiple
            onChange={(e) => setImagens(e.target.files)}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="bg-[#034389] text-white h-[50px] rounded-[999px] hover:cursor-pointer"
        >
          Criar Álbum
        </button>

      </div>
    </div>
  )
}