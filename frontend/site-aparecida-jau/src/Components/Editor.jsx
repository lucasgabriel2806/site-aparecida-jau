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

    editor
      .chain()
      .focus()
      .setImage({ src: `http://localhost:5220${data.url}` })
      .createParagraphNear()
      .run()
  }

  if (!editor) return null

  return (
    <div className='flex flex-col w-[800px]'>

      <div className='flex flex-col mb-4 mb-[35px]'>
        <label>Escolher Imagens</label>
        <input className='hover:cursor-pointer border border-[#ccc] px-4 py-2 rounded-[10px]' type="file" accept="image/*" onChange={handleImageUpload} />
      </div>

      <div className="flex">
        <button className="hover:cursor-pointer border px-4 py-2" onClick={() => editor.chain().focus().toggleBold().run()}>
          B
        </button>

        <button className="hover:cursor-pointer border px-5 py-2" onClick={() => editor.chain().focus().toggleItalic().run()}>
          I
        </button>

        <button className="hover:cursor-pointer border px-3 py-2" onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
          H1
        </button>

        <button className="hover:cursor-pointer border px-3 py-2" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
          H2
        </button>                
      </div>
      
      <div style={{ border: "1px solid #ccc", padding: "10px", minHeight: "500px" }}>
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}