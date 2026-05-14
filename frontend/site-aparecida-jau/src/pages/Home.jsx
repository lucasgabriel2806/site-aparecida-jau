import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Heading from '../Components/Heading';
import NoticiaCard from '../Components/NoticiaCard';
import BoletimInfoCard from '../Components/BoletimInfoCard';

import banner_paroquia_diurno from "./../assets/img/paroquia/externo/banner-paroquia-diurno.png";
import banner_paroquia_interno from "./../assets/img/paroquia/interno/banner-paroquia-interno.png";

const Home = () => {

  const [noticias, setNoticias] = useState([]);
  const [boletins, setBoletins] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5220/api/noticias")
      .then(res => res.json())
      .then(data => {
        setNoticias(data.slice(0, 3));
      })
      .catch(err => console.error(err));

    fetch("http://localhost:5220/api/boletinsinfos")
      .then(res => res.json())
      .then(data => {
        setBoletins(
            data
                .sort((a, b) => b.data.localeCompare(a.data))
                .slice(0, 3)
        );
      })
      .catch(err => console.error(err));

  }, []);

  return (

    <div className='flex justify-center px-[20px]'>

      <div className='w-full max-w-[1000px] pt-[50px]'>

        <img
          className='rounded-[15px] w-full'
          src={banner_paroquia_diurno}
          alt="Paróquia Nossa Senhora Aparecida"
        />

        {/* NOTÍCIAS */}

        <div className='flex flex-col gap-[25px] mt-[60px]'>

          <div className='flex items-center justify-between'>

            <Heading level={2} size='28px'>
              Últimas notícias
            </Heading>

          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px]'>

            {noticias.map(noticia => (

              <Link
                key={noticia.id}
                to={`/noticias/${noticia.slug}`}
              >
                <NoticiaCard noticia={noticia} />
              </Link>

            ))}

          </div>

          <Link
              to="/noticias"
              className='flex justify-center w-[100px] bg-[#034389] text-[#fff] px-[10px] py-[5px] rounded-[20px] hover:underline'
            >
            Ver mais
          </Link>

        </div>

        {/* MISSA E LITURGIA */}

        <div className='flex flex-col gap-[25px] mt-[60px]'>

          <Heading level={2} size='28px'>
              Missa e Liturgia
          </Heading>

          <p>Confira os horários de Missa da Paróquia</p>

          <img
            className='rounded-[15px] w-full'
            src={banner_paroquia_interno}
            alt="Paróquia Nossa Senhora Aparecida"
          />

          <Link
              to="paroquia/horarios-de-missa"
              className='flex justify-center w-[150px] bg-[#034389] text-[#fff] px-[10px] py-[5px] rounded-[20px] hover:underline'
            >
            Ver horários
          </Link>

        </div>

        {/* BOLETINS */}

        <div className='flex flex-col gap-[25px] mt-[60px]'>

          <div className='flex items-center justify-between mb-[25px]'>

            <Heading level={2} size='28px'>
              Últimos boletins informativos
            </Heading>

          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px]'>

            {boletins.map(boletim => (

                <BoletimInfoCard
                    key={boletim.id}
                    boletim={boletim}
                />

            ))}

          </div>

          <Link
              to="/boletim-info"
              className='flex justify-center w-[100px] bg-[#034389] text-[#fff] px-[10px] py-[5px] rounded-[20px] hover:underline'
            >
            Ver mais
          </Link>

        </div>

      </div>

    </div>

  )

}

export default Home;