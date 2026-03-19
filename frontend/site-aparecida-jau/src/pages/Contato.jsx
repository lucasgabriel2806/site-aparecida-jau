import Title from './../Components/Title';
import SocialMediaIcons from '../Components/SocialMediaIcons';

const Contato = () => {
  return (
    <>
        <div className="flex flex-col gap-[30px] items-center mt-[25px]">

            <Title>Contato</Title>

            <form className="flex flex-col" action="https://formsubmit.co/aparecidajausite@gmail.com" method="POST">

                <label htmlFor="name">Nome</label>
                <input className="w-[800px] h-[35px] p-[10px] mb-[5px] border-1 border-[#C0AAAA] rounded-[5px]" type="text" required />

                <label htmlFor="email">Email</label>
                <input className="w-[800px] h-[35px] p-[10px] mb-[5px] border-1 border-[#C0AAAA] rounded-[5px]" type="email" required />

                <label htmlFor="message">Mensagem</label>
                <textarea className="w-[800px] h-[100px] p-[10px] mb-[5px] border-1 border-[#C0AAAA] rounded-[5px]" name="message" id="message" required></textarea>

                <button className="w-[800px] h-[35px] mb-[5px] bg-[#034389] text-[#fff] rounded-[5px]" type='submit'>Enviar</button>

            </form>

            <SocialMediaIcons className1={"flex gap-[80px]"} className2={"w-[50px] h-[50px] rounded-[50px]"} />

            <div className="flex gap-[50px] mb-[50px]">

              <div className="flex gap-[10px]">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                <p>aparecidajausite@gmail.com</p>
              </div>

              <div className="flex gap-[10px]">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>                
                <p>(14) 3622-1225</p>
              </div>

            </div>

            <div className='flex flex-col gap-[30px]'>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.690585237682!2d-48.57557082470781!3d-22.289707679694217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8a81b92d39a01%3A0x9c733cf8b3992a82!2sPar%C3%B3quia%20Nossa%20Senhora%20Aparecida!5e0!3m2!1spt-BR!2sbr!4v1773326352828!5m2!1spt-BR!2sbr"
                    width="800"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />

                <div className='flex justify-center gap-[10px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
                    <p>R. Vinte e Quatro de Maio, 2003-2057 - Vila Nova Jau, Jaú - SP, 17205-170</p>
                </div>

            </div>

        </div>
    </>
  )
}

export default Contato;