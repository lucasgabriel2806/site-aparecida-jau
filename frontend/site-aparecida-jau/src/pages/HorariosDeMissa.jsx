import React from 'react';
import Heading from '../Components/Heading';
import banner_paroquia_interno from "./../assets/img/paroquia/interno/banner-paroquia-interno.png";

const HorariosDeMissa = () => {
  return (
    <div className='flex justify-center'>

        <div className='w-[1000px] pt-[50px]'>

            <Heading>Horários de Missa</Heading>

            <img className='rounded-[15px] mb-[50px]' src={banner_paroquia_interno} alt="" />

            <Heading size='28px' level={2}>Missas na Paróquia</Heading>

            <div className='flex justify-between mt-[25px] mb-[50px]'>

                <div className='w-[300px] h-[400px] bg-[#F7F7F7] rounded-[10px]'>

                    <div className='text-center text-[20px] font-bold text-[#034389] pt-[25px]'>Segunda à Sábado</div>

                    <div className='flex flex-col items-center pt-[110px]'>

                        <div className='text-[20px] font-bold'>Horários</div>

                        <div className='w-fit bg-[#fff] text-[20px] border py-[10px] px-[25px]'>19:00</div>

                    </div>

                </div>

                <div className='w-[300px] h-[400px] bg-[#F7F7F7] rounded-[10px]'>

                    <div className='text-center text-[20px] font-bold text-[#034389] pt-[25px]'>Domingo</div>

                    <div>

                        <div className='flex flex-col items-center pt-[60px]'>

                        <div className='text-[20px] font-bold'>Horários</div>

                        <div className='flex flex-wrap justify-center gap-x-[15px] gap-y-[15px] pt-[10px]'>

                            <div className='w-fit bg-[#fff] text-[20px] border py-[10px] px-[25px]'>06:30</div>

                            <div className='w-fit bg-[#fff] text-[20px] border py-[10px] px-[25px]'>08:00</div>

                            <div className='w-fit bg-[#fff] text-[20px] border py-[10px] px-[25px]'>11:00</div>

                            <div className='w-fit bg-[#fff] text-[20px] border py-[10px] px-[25px]'>19:00</div>

                        </div>

                    </div>

                    </div>                    

                </div>

                <div className='w-[300px] h-[400px] bg-[#F7F7F7] rounded-[10px]'>

                    <div className='text-center text-[20px] font-bold text-[#034389] pt-[25px]'>Quarta-feira</div>

                    <div className='flex flex-col items-center pt-[60px]'>

                        <div className='text-[20px] font-bold'>Horários</div>

                        <span>Novena Perpétuo Socorro</span>
                        <div className='w-fit bg-[#fff] text-[20px] border py-[10px] px-[25px]'>15:00</div>

                        <span>Missa com Novena</span>
                        <div className='w-fit bg-[#fff] text-[20px] border py-[10px] px-[25px]'>19:00</div>

                    </div>

                </div>                

            </div>

            <Heading size='28px' level={2}>Missas na Capela Medianeira</Heading>

            <div className='flex gap-[50px] mt-[25px] mb-[50px]'>

                <div className='w-[300px] h-[400px] bg-[#F7F7F7] rounded-[10px]'>

                    <div className='text-center text-[20px] font-bold text-[#034389] pt-[25px]'>Sábado</div>

                    <div className='flex flex-col items-center pt-[110px]'>

                        <div className='text-[20px] font-bold'>Horários</div>

                        <div className='w-fit bg-[#fff] text-[20px] border py-[10px] px-[25px]'>17:00</div>

                    </div>

                </div>

                <div className='w-[300px] h-[400px] bg-[#F7F7F7] rounded-[10px]'>

                    <div className='text-center text-[20px] font-bold text-[#034389] pt-[25px]'>Domingo</div>

                    <div className='flex flex-col items-center pt-[110px]'>

                        <div className='text-[20px] font-bold'>Horários</div>

                        <div className='w-fit bg-[#fff] text-[20px] border py-[10px] px-[25px]'>09:30</div>

                    </div>

                </div>

            </div>  

        </div>

    </div>
  )
}

export default HorariosDeMissa