import React from 'react';

import logo_aparecida from "./../assets/img/logo/logo-aparecida.png";

const Footer = () => {

  return (

    <div className='flex flex-col gap-[20px] bg-[#034389] w-full p-[50px] mt-[100px] relative bottom-0'>

        <img className="bg-[#fff] w-[250px] px-[10px] py-[5px] rounded-[15px]" src={logo_aparecida} alt="" />

        <p className='text-[#fff]'>&copy; Paróquia Nossa Senhora Aparecida - Jaú SP</p>

    </div>

  )

}

export default Footer;