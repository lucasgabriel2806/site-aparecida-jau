import { useState } from "react";

const CriarBoletimInfo = () => {
  const [titulo, setTitulo] = useState("");
  const [data, setData] = useState("");
  const [img, setImg] = useState(null);
  const [pdf, setPdf] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("titulo", titulo);
    formData.append("data", data);
    formData.append("img", img);
    formData.append("pdf", pdf);

    const response = await fetch("http://localhost:5220/api/BoletinsInfos", {
        method: "POST",
        body: formData,
    });

    if (response.ok) {
        alert("Boletim criado com sucesso!");
    } else {
        alert("Erro ao criar boletim");
    }
  };

  return (
    <div className="flex justify-center mt-[20px]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[500px] gap-[10px]"
      >
        <h2 className="text-[24px] font-bold">Criar Boletim</h2>

        <input
          type="text"
          placeholder="Título (ex: Março de 2023)"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="p-[10px] border rounded"
        />

        <input
          type="text"
          placeholder="Data (ex: 2023-03)"
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="p-[10px] border rounded"
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImg(e.target.files[0])}
        />

        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setPdf(e.target.files[0])}
        />

        <button
          type="submit"
          className="bg-[#034389] text-white p-[10px] rounded"
        >
          Criar Boletim
        </button>
      </form>
    </div>
  );
};

export default CriarBoletimInfo;