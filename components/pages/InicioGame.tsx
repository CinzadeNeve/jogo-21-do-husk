import { ButtonPrimary } from "@/components/ui/Button";
import bgHome from '@/public/image/background/bg-home.png'
import { useGameStore } from "@/store/useGame";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { LinkRedeSociais } from "@/components/ui/Link";
import { BiLogoGmail } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const InicioGame = () => {

    const { setStatus } = useGameStore();

    return (

        <>
            <main className="max-w-[600px] w-full relative z-[1]">
                <div className="w-full flex flex-col justify-center items-center">
                    <ul className="w-full flex flex-col gap-[.5rem] max-w-[300px]">
                        <li>
                            <ButtonPrimary onClick={() => setStatus("IN-GAME")} className="w-full text-center">
                                Iniciar
                            </ButtonPrimary>
                        </li>
                        <li>
                            <ButtonPrimary className="w-full text-center">
                                Sobre
                            </ButtonPrimary>
                        </li>
                    </ul>
                </div>
            </main>
            <div className="absolute top-0 left-0 w-full h-full bg-black">
                <img src={bgHome.src} alt="background" className="w-full h-full object-cover object-center opacity-70" />
            </div>


            {/** Redes Sociais */}
            <div className="absolute z-[2] bottom-[2rem] left-0 w-full flex items-center justify-center gap-[1rem] z-[1]">
               
                <LinkRedeSociais href="https://www.instagram.com/craudiow/" className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600" >
                    <FaInstagram className="h-[32px] max-md:h-[16px] w-[32px] max-md:w-[16px] text-white" />
                </LinkRedeSociais>

                <LinkRedeSociais href="https://github.com/CinzadeNeve/" >
                    <FaGithub className="h-[32px] max-md:h-[16px] w-[32px] max-md:w-[16px] text-white" />
                </LinkRedeSociais>

                <LinkRedeSociais className="bg-gradient-to-r from-[#EA4335] to-red-600" href="mailto:ticlaudioalves@gmail.com" >
                    <MdEmail className="h-[32px] max-md:h-[16px] w-[32px] max-md:w-[16px] text-white"  />
                </LinkRedeSociais>
            </div>
        </>
    )
}

export default InicioGame;