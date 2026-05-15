import { useEffect, useState } from "react";
import BoletimInfoCard from "../Components/BoletimInfoCard";
import Heading from "./../Components/Heading";

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
    .sort((a, b) => b.data.localeCompare(a.data)); // MAIS RECENTE PRIMEIRO

  return (
    <div className="flex flex-col items-center px-[20px] gap-[30px] mt-[25px]">

      <Heading>Boletim Informativo</Heading>

      <p className="text-[18px] text-center max-w-[450px]">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px]">

        {boletinsFiltrados.length === 0 && (
          <p>Nenhum boletim encontrado</p>
        )}

        {boletinsFiltrados.map((boletim) => (

          <BoletimInfoCard
            key={boletim.id}
            boletim={boletim}
          />

        ))}

      </div>

    </div>
  );
};

export default BoletimInfo;