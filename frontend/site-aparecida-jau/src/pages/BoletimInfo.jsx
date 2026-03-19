import { useEffect, useState } from "react";
import BoletimInfoCard from "../Components/BoletimInfoCard";
import Title from "./../Components/Title";

const BoletimInfo = () => {

  const [boletins, setBoletins] = useState([]);
  const [busca, setBusca] = useState("");

  const meses = {
    "01": "janeiro",
    "02": "fevereiro",
    "03": "março",
    "04": "abril",
    "05": "maio",
    "06": "junho",
    "07": "julho",
    "08": "agosto",
    "09": "setembro",
    "10": "outubro",
    "11": "novembro",
    "12": "dezembro"
  };

  // BUSCAR DA API
  useEffect(() => {
    fetch("http://localhost:5220/api/BoletinsInfos")
      .then(res => res.json())
      .then(data => setBoletins(data))
      .catch(err => console.error("Erro ao buscar boletins:", err));
  }, []);

  // FILTRO + ORDENAÇÃO
  const boletinsFiltrados = boletins
    .filter((boletim) => {
      if (busca === "") return true;

      const [ano, mes] = boletim.data.split("-");
      const nomeMes = meses[mes];

      return (
        ano.includes(busca) ||
        boletim.data.includes(busca) ||
        nomeMes.includes(busca)
      );
    })
    .sort((a, b) => b.data.localeCompare(a.data)); // 🔥 MAIS RECENTE PRIMEIRO

  return (
    <div className="flex flex-col items-center gap-[30px] mt-[25px]">

      <Title>Boletim Informativo</Title>

      <p>
        Confira as notícias e eventos da paróquia em nossos Boletins Informativos.
      </p>

      <div className="flex">
        <input
          className="w-[180px] h-[40px] rounded-[100px] border-1 p-[10px]"
          type="text"
          placeholder="Ano ou mês"
          onChange={(e) => setBusca(e.target.value.toLowerCase())}
        />
      </div>

      <BoletimInfoCard boletins={boletinsFiltrados} />

    </div>
  );
};

export default BoletimInfo;