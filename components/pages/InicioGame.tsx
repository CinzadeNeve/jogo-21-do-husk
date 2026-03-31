import { ButtonPrimary } from "@/components/ui/Button";
import bgHome from '@/public/image/background/bg-home.png'
import { useGameStore } from "@/store/useGame";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { LinkRedeSociais } from "@/components/ui/Link";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
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
                            <ButtonPrimary disabled={true} className="w-full text-center disabled:opacity-70 disabled:cursor-not-allowed">
                                Sobre
                            </ButtonPrimary>
                        </li>
                        <li>
                            <ButtonPrimary onClick={() => setStatus("DOACAO")} className="w-full text-center">
                                Doação
                            </ButtonPrimary>
                        </li>
                    </ul>
                </div>
            </main>
            <div className="absolute top-0 left-0 w-full h-full bg-black">
                <img src={bgHome.src} alt="background" className="w-full h-full object-cover object-center opacity-70" />
            </div>


            {/** Redes Sociais */}
            <div className="absolute z-[2] bottom-[2rem] left-0 w-full flex flex-col items-center justify-center gap-[1rem] max-md:gap-[.5rem] z-[1]">
                <h4 className="font-extrabold text-white text-[20px]">Rede Sociais</h4>
                <div className="flex items-center justify-center gap-[1rem] max-md:gap-[.5rem]">


                    <LinkRedeSociais href="https://www.instagram.com/craudiow/" className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600" >
                        <FaInstagram className="h-[32px] max-md:h-[16px] w-[32px] max-md:w-[16px] text-white" />
                    </LinkRedeSociais>

                    <LinkRedeSociais href="https://github.com/CinzadeNeve/" >
                        <FaGithub className="h-[32px] max-md:h-[16px] w-[32px] max-md:w-[16px] text-white" />
                    </LinkRedeSociais>

                    <LinkRedeSociais className="bg-gradient-to-br from-[#0A66C2] via-[#004182] to-[#002B5C]" href="https://www.linkedin.com/in/cl%C3%A1udio-alves-0813101a1/" >
                        <FaLinkedinIn className="h-[32px] max-md:h-[16px] w-[32px] max-md:w-[16px] text-white" />
                    </LinkRedeSociais>

                    <LinkRedeSociais className="bg-gradient-to-r from-[#EA4335] to-red-600" href="mailto:ticlaudioalves@gmail.com" >
                        <MdEmail className="h-[32px] max-md:h-[16px] w-[32px] max-md:w-[16px] text-white" />
                    </LinkRedeSociais>

                </div>
            </div>
        </>
    )
}

export default InicioGame;