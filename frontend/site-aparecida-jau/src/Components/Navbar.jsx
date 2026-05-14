import { useState } from "react";
import { Link } from "react-router-dom";

import logo_aparecida from "./../assets/img/logo/logo-aparecida.png";
import facebook_circle from "./../assets/img/logo/facebook-circle.jpeg";
import instagram_circle from "./../assets/img/logo/instagram-circle.png";
import youtube_circle from "./../assets/img/logo/youtube-circle.png";
import whatsapp_square from "./../assets/img/logo/whatsapp-square.png";

const Navbar = () => {

  const [openDropdown, setOpenDropdown] = useState(false);
  const [menuMobile, setMenuMobile] = useState(false);

  return (

    <header className='flex flex-col items-center mt-[8px]'>

      {/* ========================= */}
      {/* DESKTOP */}
      {/* ========================= */}

      <div className="hidden lg:flex flex-col items-center w-full">

        {/* LOGO */}

        <Link to="/">
          <img
            className="w-[250px]"
            src={logo_aparecida}
            alt="Logo Paróquia Nossa Senhora Aparecida"
          />
        </Link>

        {/* MENU */}

        <div className='w-full h-[35px] flex justify-center relative'>

          <nav>

            <ul className='flex items-center gap-[30px] list-none'>

              <li>
                <Link to="/">Home</Link>
              </li>

              {/* DROPDOWN */}

              <li
                className="relative"
                onMouseEnter={() => setOpenDropdown(true)}
                onMouseLeave={() => setOpenDropdown(false)}
              >

                <div className="flex items-center cursor-pointer py-2">

                  Paróquia

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    width="15px"
                    className="ml-1"
                  >
                    <path d="M480-360 280-560h400L480-360Z"/>
                  </svg>

                </div>

                {openDropdown && (

                  <div className="absolute top-full left-0 flex flex-col bg-white shadow-md rounded-md min-w-[220px] z-50">

                    <Link
                      to="/paroquia/historia-da-paroquia"
                      className="px-4 py-2 hover:bg-gray-100"
                    >
                      História da Paróquia
                    </Link>

                    <Link
                      to="/paroquia/horarios-de-missa"
                      className="px-4 py-2 hover:bg-gray-100"
                    >
                      Horários de Missa
                    </Link>

                    <Link
                      to="/albuns"
                      className="px-4 py-2 hover:bg-gray-100"
                    >
                      Álbuns
                    </Link>

                  </div>

                )}

              </li>

              <li>
                <Link to="/noticias">Notícias</Link>
              </li>

              <li>
                <Link to="/boletim-info">Boletim Info</Link>
              </li>

              <li>
                <Link to="/contato">Contato</Link>
              </li>

            </ul>

          </nav>

          {/* REDES SOCIAIS */}

          <div className='flex items-center gap-[12px] absolute right-[100px]'>

            <a
              href="https://www.youtube.com/@AparecidaJauSP"
              target='_blank'
              rel="noreferrer"
            >
              <img className='w-[30px]' src={youtube_circle} alt="" />
            </a>

            <a
              href="https://www.facebook.com/nsaparecidajahu"
              target='_blank'
              rel="noreferrer"
            >
              <img className='w-[30px]' src={facebook_circle} alt="" />
            </a>

            <a
              href="https://www.instagram.com/aparecidajau/"
              target='_blank'
              rel="noreferrer"
            >
              <img className='w-[35px]' src={instagram_circle} alt="" />
            </a>

            <a
              href="https://chat.whatsapp.com/EvxJksmUdIYDxzw5fUI99E"
              target='_blank'
              rel="noreferrer"
            >
              <img
                className='w-[30px] rounded-[50%]'
                src={whatsapp_square}
                alt=""
              />
            </a>

            <Link
              to="/login"
              className='flex justify-center items-center bg-[#034389] w-[100px] h-[30px] text-[#fff] rounded-[20px]'
            >
              Área ADM
            </Link>

          </div>

        </div>

      </div>

      {/* ========================= */}
      {/* MOBILE */}
      {/* ========================= */}

      <div className="lg:hidden w-full flex justify-between items-center px-[20px]">

        {/* LOGO */}

        <Link to="/">
          <img
            className="w-[180px]"
            src={logo_aparecida}
            alt="Logo Paróquia Nossa Senhora Aparecida"
          />
        </Link>

        {/* BOTÃO HAMBURGUER */}

        <button
          onClick={() => setMenuMobile(!menuMobile)}
          className="flex flex-col gap-[5px]"
        >

          <span className="w-[28px] h-[3px] bg-[#034389] rounded-full"></span>
          <span className="w-[28px] h-[3px] bg-[#034389] rounded-full"></span>
          <span className="w-[28px] h-[3px] bg-[#034389] rounded-full"></span>

        </button>

      </div>

      {/* MENU MOBILE */}

      {menuMobile && (

        <div className='lg:hidden w-full mt-[15px] px-[20px]'>

          <nav className='flex flex-col gap-[15px]'>

            <Link
              to="/"
              onClick={() => setMenuMobile(false)}
            >
              Home
            </Link>

            <Link
              to="/paroquia/historia-da-paroquia"
              onClick={() => setMenuMobile(false)}
            >
              História da Paróquia
            </Link>

            <Link
              to="/paroquia/horarios-de-missa"
              onClick={() => setMenuMobile(false)}
            >
              Horários de Missa
            </Link>

            <Link
              to="/albuns"
              onClick={() => setMenuMobile(false)}
            >
              Álbuns
            </Link>

            <Link
              to="/noticias"
              onClick={() => setMenuMobile(false)}
            >
              Notícias
            </Link>

            <Link
              to="/boletim-info"
              onClick={() => setMenuMobile(false)}
            >
              Boletim Info
            </Link>

            <Link
              to="/contato"
              onClick={() => setMenuMobile(false)}
            >
              Contato
            </Link>

            {/* REDES MOBILE */}

            <div className='flex items-center gap-[12px] pt-[10px]'>

              <a
                href="https://www.youtube.com/@AparecidaJauSP"
                target='_blank'
                rel="noreferrer"
              >
                <img className='w-[30px]' src={youtube_circle} alt="" />
              </a>

              <a
                href="https://www.facebook.com/nsaparecidajahu"
                target='_blank'
                rel="noreferrer"
              >
                <img className='w-[30px]' src={facebook_circle} alt="" />
              </a>

              <a
                href="https://www.instagram.com/aparecidajau/"
                target='_blank'
                rel="noreferrer"
              >
                <img className='w-[35px]' src={instagram_circle} alt="" />
              </a>

              <a
                href="https://chat.whatsapp.com/EvxJksmUdIYDxzw5fUI99E"
                target='_blank'
                rel="noreferrer"
              >
                <img
                  className='w-[30px] rounded-[50%]'
                  src={whatsapp_square}
                  alt=""
                />
              </a>

            </div>

            <Link
              to="/login"
              onClick={() => setMenuMobile(false)}
              className='flex justify-center items-center bg-[#034389] w-[120px] h-[35px] text-[#fff] rounded-[20px] mt-[10px]'
            >
              Área ADM
            </Link>

          </nav>

        </div>

      )}

      {/* LINHA */}

      <div className='mt-[10px] w-full h-[1px] bg-[#D9D9D9]'></div>

    </header>

  );

};

export default Navbar;