import imgPixClaudioAlves from '@/public/image/outros/pix-jose-claudio-alves-sobrinho.jpeg'
import { IoIosReturnLeft } from "react-icons/io";
import { useGameStore } from "@/store/useGame";
import { useState } from 'react';

const Doacao = () => {
    const { setStatus } = useGameStore();

    const [textPix, setTextPix] = useState("Copiar Pix")
    const chavePix = "00020126580014BR.GOV.BCB.PIX0136a69bf981-7031-4078-abb9-930ab23a2dfe5204000053039865802BR5925Jose Claudio Alves Sobrin6009SAO PAULO62140510UVkQi6OoQe63040287"

    const copiar = async () => {
        await navigator.clipboard.writeText(chavePix);
        setTextPix("Pix copiado!")
    };
    return (

        <>
            <div className="max-w-[600px] flex flex-col w-full relative z-[1] bg-white min-h-[calc(100vh-4rem)] max-sm:min-h-[calc(100dvh-2rem)] relative z-[1] bg-primary-black p-[1rem] rounded-[.5rem]">

                <div className="flex flex-col gap-[1rem]">
                    <h1 className="text-4xl text-primary-red text-center uppercase">
                        Doação
                    </h1>
                    <span className="h-[2px] bg-primary-red w-full relative flex"></span>
                </div>

                <div className='flex flex-1 flex-col gap-[.3rem] items-center justify-center'>
                    <img className='max-w-[120px] w-full' src={imgPixClaudioAlves.src} alt="Pix para doação" />
                    <button onClick={() => copiar()} className='bg-primary-red p-[.2rem_2rem] rounded-[.5rem] text-white text-base cursor-pointer hover:scale-[1.1] focus-visible:scale-[1.1] transition-transform duration-200 linear focus-visible:outline-none'>{textPix}</button>

                    <div className="mt-[2rem] rounded-[1rem] bg-primary-red text-white text-justify leading-[1.1] p-[1rem_2rem] flex flex-col gap-[1rem]">
                        <p>
                            Este projeto foi desenvolvido com dedicação e foco em aprendizado e qualidade.
                            Se ele foi útil para você, considere apoiar com uma doação via Pix.
                        </p>
                        <p>
                            Sua contribuição ajuda a manter o projeto atualizado e incentiva a criação de novos conteúdos.
                        </p>
                    </div>

                </div>
                <button  onClick={() => setStatus("INICIO")} className='bg-primary-red flex gap-[.3rem] text-white w-fit p-[.2rem_1rem] rounded-[.5rem] text-[12px] uppercase font-extrabold cursor-pointer hover:scale-[1.1] focus-visible:scale-[1.1] transition-transform duration-200 linear focus-visible:outline-none'>
                    <IoIosReturnLeft className='text-white w-[20px] h-[20px]' />
                    Retornar
                </button>

            </div>

            <span className="h-full w-full flex bg-primary-red absolute inset-0"></span>
        </>

    )
}

export default Doacao;