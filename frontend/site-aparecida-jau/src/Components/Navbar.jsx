import { Link } from "react-router-dom";
import logo_aparecida from "./../assets/img/logo/logo-aparecida.png";
import facebook_circle from "./../assets/img/logo/facebook-circle.jpeg";
import instagram_circle from "./../assets/img/logo/instagram-circle.png";
import youtube_circle from "./../assets/img/logo/youtube-circle.png";

const Navbar = () => {
  return (
    <header className='flex flex-col items-center mt-[8px]'>
        <div>
            <img className="w-[250px]" src={logo_aparecida} alt="" />
        </div>
        <div className='w-full h-[35px] flex justify-center relative'>
            <nav className='flex items-center gap-[30px] list-none'>
                <li>
                    <Link to="/home">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="flex items-center" to="#">
                        Paróquia <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="15px" fill="#000"><path d="M480-360 280-560h400L480-360Z"/></svg>
                    </Link>
                </li>
                <li>
                    <Link to="/noticias">
                        Notícias
                    </Link>
                </li>
                <li>
                    <Link to="/boletim-info">
                        Boletim Info
                    </Link>
                </li>
                <li>
                    <Link to="/contato">
                        Contato
                    </Link>
                </li>
            </nav>
            <div className='flex items-center gap-[12px] absolute right-[100px]'>
                <a href="https://www.youtube.com/@AparecidaJauSP" target='_blank'>
                    <img className='w-[30px]' src={youtube_circle} alt="" />
                </a>
                <a href="https://www.facebook.com/nsaparecidajahu" target='_blank'>
                    <img className='w-[30px]' src={facebook_circle} alt="" />
                </a>
                <a href="https://www.instagram.com/aparecidajau/" target='_blank'>
                    <img className='w-[35px]' src={instagram_circle} alt="" />
                </a>
                <a className='flex justify-center items-center bg-[#034389] w-[100px] h-[30px] text-[#fff] rounded-[20px]' href="#">
                    login
                </a>
            </div>
        </div>
        <div className='mt-[10px] w-full h-[.1px] bg-[#D9D9D9]'></div>
    </header>
  )
}

export default Navbar;