import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'

export default function Editor({ onChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image
    ],
    content: '<p>Escreva sua notícia...</p>',
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    }
  })

  const handleImageUpload = async (e) => {
    const file = e.target.files[0]
    if (!file || !editor) return

    const formData = new FormData()
    formData.append("file", file)

    const res = await fetch("http://localhost:5220/api/noticias/upload", {
      method: "POST",
      body: formData
    })

    const data = await res.json()

    // 🔥 AQUI ESTÁ O SEGREDO
    editor
      .chain()
      .focus()
      .setImage({ src: `http://localhost:5220${data.url}` })
      .createParagraphNear()
      .run()
  }

  if (!editor) return null

  return (
    <div>
      {/* 🧰 Toolbar */}
      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => editor.chain().focus().toggleBold().run()}>
          B
        </button>

        <button onClick={() => editor.chain().focus().toggleItalic().run()}>
          I
        </button>

        <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
          H1
        </button>

        <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
          H2
        </button>

        {/* 📷 botão imagem */}
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>

      {/* ✍️ Área de edição */}
      <div style={{ border: "1px solid #ccc", padding: "10px", minHeight: "200px" }}>
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}