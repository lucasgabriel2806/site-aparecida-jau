const BoletimInfoCard = ({ boletins }) => {
  return (
    <div className="grid grid-cols-3 gap-8">

      {boletins.length === 0 && (        
        <p>Nenhum boletim encontrado</p>
      )}

      {boletins.map((boletim) => (
        <a key={boletim.id} href={boletim.pdf} target="_blank">

          <img
            className="rounded-[10px]"
            src={boletim.img}
            alt={boletim.titulo}
          />

          <p className="font-bold">{boletim.titulo}</p>

        </a>
      ))}

    </div>
  );
};

export default BoletimInfoCard;