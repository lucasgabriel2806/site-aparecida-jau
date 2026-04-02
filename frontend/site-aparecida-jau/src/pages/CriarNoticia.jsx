import { useState } from "react"
import Editor from "../Components/Editor"
import axios from "axios"

export default function CriarNoticia() {
  const [titulo, setTitulo] = useState("")
  const [conteudo, setConteudo] = useState("")
  const [imagem, setImagem] = useState(null)

  const handleSubmit = async () => {
    try {
        console.log("ENVIANDO...");

        const formData = new FormData()
        formData.append("titulo", titulo)
        formData.append("conteudo", conteudo)
        formData.append("imagemCapa", imagem)

        const response = await axios.post("http://localhost:5220/api/noticias", formData)

        console.log("SUCESSO:", response.data)
    } catch (error) {
        console.error("ERRO:", error)
    }
  }

  return (
    <div>
      <input placeholder="Título" onChange={e => setTitulo(e.target.value)} />

      <Editor onChange={setConteudo} />

      <input type="file" onChange={e => setImagem(e.target.files[0])} />

      <button onClick={handleSubmit}>Salvar</button>
    </div>
  )
}