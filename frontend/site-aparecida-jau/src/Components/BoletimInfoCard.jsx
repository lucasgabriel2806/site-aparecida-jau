const BoletimInfoCard = ({ boletim }) => {

  return (

    <a
      href={`http://localhost:5220${boletim.pdf}`}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col gap-[10px]"
    >

      <img
        className="rounded-[15px] w-full hover:scale-[1.02] duration-200"
        src={`http://localhost:5220${boletim.img}`}
        alt={boletim.titulo}
      />

      <p className="font-bold">
        {boletim.titulo}
      </p>

    </a>

  )

}

export default BoletimInfoCard;