import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className="flex gap-5 justify-center mt-2.5">

        <Link className="w-50 p-2.5 rounded-[5px] bg-[#034389] text-white text-center" to='/criar-boletim-info'>
            Cadastrar Boletim
        </Link>

        <Link className="w-50 p-2.5 rounded-[5px] bg-[#034389] text-white text-center" to='/'>            
            Postar Notícia            
        </Link>

    </div>
  )
}

export default Admin;