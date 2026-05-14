import React from 'react';
import Heading from '../Components/Heading';

import banner_paroquia_interno from "./../assets/img/paroquia/interno/banner-paroquia-interno.png";

const HorariosDeMissa = () => {

  return (

    <div className='flex justify-center px-[20px]'>

      <div className='w-full max-w-[1000px] pt-[50px]'>

        <Heading>Horários de Missa</Heading>

        <img
          className='rounded-[15px] mb-[50px] w-full'
          src={banner_paroquia_interno}
          alt=""
        />

        {/* ========================= */}
        {/* PARÓQUIA */}
        {/* ========================= */}

        <Heading size='28px' level={2}>
          Missas na Paróquia
        </Heading>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[25px] mb-[50px]'>

          {/* SEGUNDA A SÁBADO */}

          <div className='bg-[#F7F7F7] rounded-[10px] min-h-[400px] p-[25px]'>

            <div className='text-center text-[20px] font-bold text-[#034389]'>
              Segunda à Sábado
            </div>

            <div className='flex flex-col items-center justify-center h-[300px]'>

              <div className='text-[20px] font-bold mb-[15px]'>
                Horários
              </div>

              <div className='bg-[#fff] text-[20px] border py-[10px] px-[25px] rounded-[8px]'>
                19:00
              </div>

            </div>

          </div>

          {/* DOMINGO */}

          <div className='bg-[#F7F7F7] rounded-[10px] min-h-[400px] p-[25px]'>

            <div className='text-center text-[20px] font-bold text-[#034389]'>
              Domingo
            </div>

            <div className='flex flex-col items-center justify-center h-[300px]'>

              <div className='text-[20px] font-bold mb-[15px]'>
                Horários
              </div>

              <div className='flex flex-wrap justify-center gap-[15px]'>

                <div className='bg-[#fff] text-[20px] border py-[10px] px-[25px] rounded-[8px]'>
                  06:30
                </div>

                <div className='bg-[#fff] text-[20px] border py-[10px] px-[25px] rounded-[8px]'>
                  08:00
                </div>

                <div className='bg-[#fff] text-[20px] border py-[10px] px-[25px] rounded-[8px]'>
                  11:00
                </div>

                <div className='bg-[#fff] text-[20px] border py-[10px] px-[25px] rounded-[8px]'>
                  19:00
                </div>

              </div>

            </div>

          </div>

          {/* QUARTA */}

          <div className='bg-[#F7F7F7] rounded-[10px] min-h-[400px] p-[25px]'>

            <div className='text-center text-[20px] font-bold text-[#034389]'>
              Quarta-feira
            </div>

            <div className='flex flex-col items-center justify-center h-[300px]'>

              <div className='text-[20px] font-bold mb-[15px]'>
                Horários
              </div>

              <span className='text-center'>
                Novena Perpétuo Socorro
              </span>

              <div className='bg-[#fff] text-[20px] border py-[10px] px-[25px] rounded-[8px] mt-[10px] mb-[20px]'>
                15:00
              </div>

              <span className='text-center'>
                Missa com Novena
              </span>

              <div className='bg-[#fff] text-[20px] border py-[10px] px-[25px] rounded-[8px] mt-[10px]'>
                19:00
              </div>

            </div>

          </div>

        </div>

        {/* ========================= */}
        {/* CAPELA */}
        {/* ========================= */}

        <Heading size='28px' level={2}>
          Missas na Capela Medianeira
        </Heading>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-[30px] mt-[25px] mb-[50px]'>

          {/* SÁBADO */}

          <div className='bg-[#F7F7F7] rounded-[10px] min-h-[400px] p-[25px]'>

            <div className='text-center text-[20px] font-bold text-[#034389]'>
              Sábado
            </div>

            <div className='flex flex-col items-center justify-center h-[300px]'>

              <div className='text-[20px] font-bold mb-[15px]'>
                Horários
              </div>

              <div className='bg-[#fff] text-[20px] border py-[10px] px-[25px] rounded-[8px]'>
                17:00
              </div>

            </div>

          </div>

          {/* DOMINGO */}

          <div className='bg-[#F7F7F7] rounded-[10px] min-h-[400px] p-[25px]'>

            <div className='text-center text-[20px] font-bold text-[#034389]'>
              Domingo
            </div>

            <div className='flex flex-col items-center justify-center h-[300px]'>

              <div className='text-[20px] font-bold mb-[15px]'>
                Horários
              </div>

              <div className='bg-[#fff] text-[20px] border py-[10px] px-[25px] rounded-[8px]'>
                09:30
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  )

}

export default HorariosDeMissa;