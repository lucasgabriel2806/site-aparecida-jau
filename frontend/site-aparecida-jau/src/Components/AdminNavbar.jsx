import { useState } from "react";
import { Link } from "react-router-dom";
import logo_aparecida from "./../assets/img/logo/logo-aparecida.png";
import facebook_circle from "./../assets/img/logo/facebook-circle.jpeg";
import instagram_circle from "./../assets/img/logo/instagram-circle.png";
import youtube_circle from "./../assets/img/logo/youtube-circle.png";
import whatsapp_square from "./../assets/img/logo/whatsapp-square.png";

const Navbar = () => {

    const [open, setOpen] = useState(false);

  return (
    <header className='flex flex-col items-center mt-[8px]'>
      <div>
        <img className="w-[250px]" src={logo_aparecida} alt="" />
      </div>

      <div className='w-full h-[35px] flex justify-center relative'>

        <nav className='flex items-center gap-[30px] list-none'>

          <li>
            <Link to="/criar-noticia">Criar Notícia</Link>
          </li>

          <li>
            <Link to="/criar-album">Criar Álbum</Link>
          </li>

          <li>
            <Link to="/criar-boletim-info">Criar Boletim Info</Link>
          </li>

        </nav>

      </div>

      <div className='mt-[10px] w-full h-[.1px] bg-[#D9D9D9]'></div>
    </header>
  );
};

export default Navbar;