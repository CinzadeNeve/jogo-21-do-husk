import { ButtonPrimary } from "@/components/ui/Button";
import bgHome from '@/public/image/background/bg-home.png'
import { useGameStore } from "@/store/useGame";

const InicioGame = () => {

    const {setStatus} = useGameStore();

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
        </>
    )
}

export default InicioGame;