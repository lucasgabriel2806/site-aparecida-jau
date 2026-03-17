import { useState } from "react";
import { boletim_info } from "./../data/boletimInfo";
import BoletimInfoCard from "../Components/BoletimInfoCard";
import Title from "./../Components/Title";

const BoletimInfo = () => {

    const [busca, setBusca] = useState("");
    const [anoBusca, setAnoBusca] = useState("");

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

    const boletinsFiltrados = boletim_info.filter((boletim) => {
      if (busca === "") return true;

      const [ano, mes] = boletim.data.split("-");
      const nomeMes = meses[mes];

      return (
          ano.includes(busca) ||
          boletim.data.includes(busca) ||
          nomeMes.includes(busca)
      );
    });

  return (
    <>
        <div className="flex flex-col items-center gap-[30px] mt-[25px]">

            <Title>Boletim Informativo</Title>

            <p>Confira as notícias e eventos da paróquia em nossos Boletins Informativos.</p>

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
    </>
  )
}

export default BoletimInfo;