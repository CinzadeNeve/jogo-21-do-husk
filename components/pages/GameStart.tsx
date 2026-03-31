import imgHuskRender from '@/public/image/render/Husk_Render_1.webp'
import imgHuskVence from '@/public/image/background/husk-win.jpg'
import imgHuskDerrota from '@/public/image/background/husk-loser.png'
import { baralho, Cartas } from '@/class/cartas';
import { useEffect, useState } from 'react';
import { useGameStore } from "@/store/useGame";


const GameStart = () => {
    const { setStatus } = useGameStore();

    const [maoInicial, setMaoInicial] = useState<(Cartas | undefined)[]>([]);
    const [maoHuskInicial, setMaoHuskInicial] = useState<(Cartas | undefined)[]>([]);
    const [listaPontos, setListaPontos] = useState<number[]>([]);
    const [listaPontosHusk, setListaPontosHusk] = useState<number[]>([]);
    const [pontos, setPontos] = useState(0);
    const [pontosHusk, setPontosHusk] = useState(0);
    const [buttonMandaMais, setButtonMandaMais] = useState(false);
    const [buttonParar, setButtonParar] = useState(false);
    const [isDerrota, setIsDerrota] = useState(false);
    const [isVitoria, setIsVitoria] = useState(false);
    const [turnoHusk, setTurnoHusk] = useState(false);
    const [isAs, setIsAs] = useState(false);


    function determinarVencedor() {
        if (!turnoHusk) return;

        if (pontosHusk > pontos) {
            if (pontosHusk > 21) {
                setIsVitoria(true);
            } else {
                setIsDerrota(true);
            }
        } else if (pontosHusk < pontos) {
            if (pontos > 21) {
                setIsDerrota(true);
            } else {
                setIsVitoria(true);
            }
        } else if (pontosHusk == pontos) {
            setIsDerrota(true);
        }
    }

    function decideAsHusk() {
        if (pontosHusk + 11 == 21) {
            setListaPontosHusk(prev => [...prev, 11]);
        }
        else if (pontosHusk + 1 == 21) {
            setListaPontosHusk(prev => [...prev, 1]);
        }
        else if (pontosHusk + 11 < 21) {
            setListaPontosHusk(prev => [...prev, 11]);
        }
        else if (pontosHusk + 11 > 21) {
            setListaPontosHusk(prev => [...prev, 1]);
        }
        else if (pontosHusk + 1 < 21) {
            setListaPontosHusk(prev => [...prev, 1]);
        }
        else {
            setListaPontosHusk(prev => [...prev, 11]);
        }
    }

    // 1. A função de clique apenas inicia o turno do Husk (se necessário)
    function iniciarTurnoHusk() {
        // Se o Husk já ganhou ou empatou, não faz nada
        if (pontosHusk >= pontos) {
            setIsDerrota(true);
            return;
        }

        // Caso contrário, ele começa a comprar
        comprarCartaHusk();
    }

    // 2. Função isolada para comprar UMA carta
    const comprarCartaHusk = () => {
        const novaCarta = baralho.puxarCarta();
        let temAs = false;

        if (novaCarta) {
            if (novaCarta?.valor === 'A') {
                temAs = true;
            } else if (novaCarta?.valor && ['J', 'Q', 'K'].includes(novaCarta.valor)) {
                setListaPontosHusk(prev => [...prev, 10]);
            } else if (novaCarta) {
                setListaPontosHusk(prev => [...prev, parseInt(novaCarta.valor)]);
            }
            setMaoHuskInicial(prev => [...prev, novaCarta]);
        }

        if (temAs) {
            decideAsHusk();
        }
    };

    // 3. O "Cérebro" do Husk: Reage a mudanças na mão dele
    useEffect(() => {
        // Condição de parada: Husk atingiu ou passou os pontos do jogador, ou estourou
        if (pontosHusk >= pontos || pontosHusk >= 21) {
            // Aqui você verifica quem ganhou
            determinarVencedor();
            return;
        }

        if (!turnoHusk) return;

        // Se o turno for do Husk e ele ainda estiver atrás do jogador:
        const timer = setTimeout(() => {
            comprarCartaHusk();
        }, 1500);

        return () => clearTimeout(timer); // Limpa o timer se o componente desmontar
    }, [maoHuskInicial, pontosHusk]); // Executa sempre que a mão mudar


    function exibePontos() {
        let totalPontos = 0;
        listaPontos.forEach(ponto => {
            totalPontos += ponto;
        });
        setPontos(totalPontos);

        totalPontos = 0;
        listaPontosHusk.forEach(ponto => {
            totalPontos += ponto;
        });

        setPontosHusk(totalPontos);
    }

    useEffect(() => {
        baralho.embaralhar();

        const auxMaoInicial = [
            baralho.puxarCarta(),
            baralho.puxarCarta()
        ];

        const novosPontos: number[] = [];
        let qtrAs = 0;

        auxMaoInicial.forEach((carta) => {
            if (carta?.valor === 'A') {
                qtrAs++;
            } else if (carta?.valor && ['J', 'Q', 'K'].includes(carta.valor)) {
                novosPontos.push(10);
            } else if (carta) {
                novosPontos.push(parseInt(carta.valor));
            }
        });

        if (qtrAs == 2) {
            setListaPontos(prev => [...prev, 11, 1]);
        } else if (qtrAs == 1) {
            setIsAs(true);
            setButtonMandaMais(false)
            setButtonParar(false)
        }
        setListaPontos(novosPontos);

        setMaoInicial([
            auxMaoInicial[0],
            auxMaoInicial[1]
        ]);

        const novosPontosHusk: number[] = [];
        const auxMaoHuskInicial = [baralho.puxarCarta(), baralho.puxarCarta()];
        auxMaoHuskInicial.forEach(carta => {
            if (carta?.valor === 'A') {
                decideAsHusk();
            } else if (carta?.valor && ['J', 'Q', 'K'].includes(carta.valor)) {
                novosPontosHusk.push(10);
            } else if (carta) {
                novosPontosHusk.push(parseInt(carta.valor));
            }
        });
        setListaPontosHusk(novosPontosHusk);

        setMaoHuskInicial([auxMaoHuskInicial[0], auxMaoHuskInicial[1]]);


        exibePontos()

    }, [])

    useEffect(() => {
        //calcularPontos(maoInicial);
        exibePontos();
    }, [maoInicial])

    useEffect(() => {
        //calcularPontos(maoHuskInicial, true);
        exibePontos();
    }, [maoHuskInicial])

    useEffect(() => {
        if (pontos > 21) {
            setIsDerrota(true)
            setButtonMandaMais(true)
            setButtonParar(true)
        }
    }, [pontos])

    useEffect(() => { exibePontos() }, [listaPontos, listaPontosHusk])

    function resetGame() {
        setPontos(0);
        setListaPontos([]);
        setPontosHusk(0);
        setListaPontosHusk([]);


        setButtonMandaMais(false);
        setButtonParar(false);
        setIsVitoria(false);
        setTurnoHusk(false);
        setIsDerrota(false);
        baralho.resetarBaralho();
        baralho.embaralhar();
        const auxMaoInicial = [
            baralho.puxarCarta(),
            baralho.puxarCarta()
        ];

        let qtrAs = 0;
        auxMaoInicial.forEach(carta => {
            if (carta?.valor === 'A') {
                qtrAs++;
            } else if (carta?.valor === 'J' || carta?.valor === 'Q' || carta?.valor === 'K') {
                setListaPontos(prev => [...prev, 10]);
            } else if (carta) {
                setListaPontos(prev => [...prev, parseInt(carta.valor)]);
            }
        });

        if (qtrAs == 2) {
            setListaPontos(prev => [...prev, 11, 1]);
        } else if (qtrAs == 1) {
            setIsAs(true);
            setButtonMandaMais(false)
            setButtonParar(false)
        }
        setMaoInicial([
            auxMaoInicial[0],
            auxMaoInicial[1]
        ]);


        const auxMaoHuskInicial = [baralho.puxarCarta(), baralho.puxarCarta()];
        auxMaoHuskInicial.forEach(carta => {
            if (carta?.valor === 'A') {
                decideAsHusk()
            } else if (carta?.valor === 'J' || carta?.valor === 'Q' || carta?.valor === 'K') {
                setListaPontosHusk(prev => [...prev, 10]);
            } else if (carta) {
                setListaPontosHusk(prev => [...prev, parseInt(carta.valor)]);
            }
        });

        setMaoHuskInicial([auxMaoHuskInicial[0], auxMaoHuskInicial[1]]);



        exibePontos();
    }

    return (
        <>
            <main className="flex flex-col max-w-[600px] min-h-[calc(100vh-4rem)] max-sm:min-h-[calc(100dvh-2rem)] w-full relative z-[1] bg-primary-black p-[1rem] rounded-[.5rem]">
                <div className="h-[160px] max-sm:h-[100px] w-full overflow-hidden border-4 border-primary-red">
                    <img className='w-full h-full object-center object-cover' src={imgHuskRender.src} alt="" />
                </div>

                <div className='flex-1 relative overflow-hidden'>
                    <span className='absolute text-primary-red top-[10px] left-[10px]'>Seus pontos: <span className='!font-extrabold'>{pontos}</span></span>

                    <div className='absolute text-primary-red right-[10px] top-[10px] flex flex-col'>
                        <p>Pontos do Husk: {pontosHusk}</p>
                        <div className='flex items-center justify-end gap-[4px]'>
                            {maoHuskInicial.map((carta, index) => (
                                <img key={index} src={carta?.img || ''} alt={`Carta ${index + 1}`} className='w-[40px] h-auto' />
                            ))}
                        </div>
                    </div>

                    <div className='flex flex-col items-center py-[1rem] absolute left-0 bottom-0 w-full'>
                        <h2 className='text-base text-white font-bold'>Sua Mão</h2>
                        <div className='flex gap-[.5rem] mt-[.5rem] w-full justify-center overflow-x-auto'>
                            {maoInicial.map((carta, index) => (
                                <img key={index} src={carta?.img || ''} alt={`Carta ${index + 1}`} className='w-[60px] h-auto' />
                            ))}
                        </div>
                    </div>


                    {/** Husk Venceu */}
                    <div className={`${isDerrota ? 'visibled' : 'invisible pointer-events-none'} flex flex-col w-full h-full absolute inset-0 bg-primary-black justify-end items-center`}>

                        <div className={`${isDerrota ? 'translate-y-0' : 'translate-y-500'} transition-transform duration-600 linear relative z-[2] bottom-[1rem] flex flex-col items-center justify-center`}>

                            <div className='flex flex-col bg-white w-full items-center text-primary-red p-[2px]'>
                                <p className='w-full flex flex-col items-center'>
                                    <span className='font-extrabold uppercase p-[.2rem_.5rem] bg-primary-red text-white rounded-[10px] min-w-full flex justify-center'>Você perdeu!</span>
                                </p>
                                <p>
                                    Seus pontos: {pontos}
                                </p>
                                <div className='flex items-center justify-center gap-[4px] w-full overflow-x-auto px-[.2rem]'>
                                    {maoInicial.map((carta, index) => (
                                        <img key={index} src={carta?.img || ''} alt={`Carta ${index + 1}`} className='w-[40px] h-auto hover:scale-[1.4] focus-visible:scale-[1.4] transition-transform duration-150 linear' />
                                    ))}
                                </div>
                                <p className='mt-[1rem]'>
                                    Pontos do Husk: {pontosHusk}
                                </p>
                                <div className='flex items-center justify-center gap-[4px] w-full overflow-x-auto px-[.2rem]'>
                                    {maoHuskInicial.map((carta, index) => (
                                        <img key={index} src={carta?.img || ''} alt={`Carta ${index + 1}`} className='w-[40px] h-auto hover:scale-[1.4] focus-visible:scale-[1.4] transition-transform duration-150 linear' />
                                    ))}
                                </div>
                            </div>

                            <button onClick={() => {
                                resetGame();
                            }} className='text-[12px] hover:scale-[1.1] focus-visible:scale-[1.1] focus-visible:outline-none transition-transform duration-100 linear border-2 border-white disabled:opacity-40 cursor-pointer w-[260px] p-[.5rem_2.5rem] bg-primary-black text-white  uppercase'>
                                Jogar novamente
                            </button>
                            <button onClick={() => setStatus("INICIO")} className='text-[12px] hover:scale-[1.1] focus-visible:scale-[1.1] focus-visible:outline-none transition-transform duration-100 linear border-2 border-white disabled:opacity-40 cursor-pointer w-[260px] p-[.5rem_2.5rem] bg-primary-black text-white  uppercase'>
                                Sair
                            </button>
                        </div>
                        <img className='absolute inset-0 w-full h-full object-cover object-center z-[0] opacity-40' src={imgHuskVence.src} alt="" />
                    </div>

                    {/** Husk Perdeu */}
                    <div className={`${isVitoria ? 'visibled' : 'invisible pointer-events-none'} flex flex-col w-full h-full absolute inset-0 bg-primary-black justify-end items-center`}>

                        <div className={`${isVitoria ? 'translate-y-0' : 'translate-y-500'} transition-transform duration-600 linear relative z-[2] bottom-[1rem] flex flex-col items-center justify-center`}>

                            <div className='flex flex-col bg-white w-full items-center text-primary-red p-[2px]'>
                                <p className='w-full flex flex-col items-center'>
                                    <span className='font-extrabold uppercase p-[.2rem_.5rem] bg-primary-red text-white rounded-[10px] min-w-full flex justify-center'>Você venceu!</span>
                                </p>
                                <p>
                                    Seus pontos: {pontos}
                                </p>
                                <div className='flex items-center justify-center gap-[4px] w-full overflow-x-auto px-[.2rem]'>
                                    {maoInicial.map((carta, index) => (
                                        <img key={index} src={carta?.img || ''} alt={`Carta ${index + 1}`} className='w-[40px] h-auto hover:scale-[1.4] focus-visible:scale-[1.4] transition-transform duration-150 linear' />
                                    ))}
                                </div>
                                <p className='mt-[1rem]'>
                                    Pontos do Husk: {pontosHusk}
                                </p>
                                <div className='flex items-center justify-center gap-[4px] w-full overflow-x-auto px-[.2rem]'>
                                    {maoHuskInicial.map((carta, index) => (
                                        <img key={index} src={carta?.img || ''} alt={`Carta ${index + 1}`} className='w-[40px] h-auto hover:scale-[1.4] focus-visible:scale-[1.4] transition-transform duration-150 linear' />
                                    ))}
                                </div>
                            </div>

                            <button onClick={() => {
                                resetGame();
                            }} className='text-[12px] hover:scale-[1.1] focus-visible:scale-[1.1] focus-visible:outline-none transition-transform duration-100 linear border-2 border-white disabled:opacity-40 cursor-pointer w-[260px] p-[.5rem_2.5rem] bg-primary-black text-white  uppercase'>
                                Jogar novamente
                            </button>
                            <button onClick={() => setStatus("INICIO")} className='text-[12px] hover:scale-[1.1] focus-visible:scale-[1.1] focus-visible:outline-none transition-transform duration-100 linear border-2 border-white disabled:opacity-40 cursor-pointer w-[260px] p-[.5rem_2.5rem] bg-primary-black text-white  uppercase'>
                                Sair
                            </button>
                        </div>
                        <img className='absolute inset-0 w-full h-full object-cover object-center z-[0] opacity-40' src={imgHuskDerrota.src} alt="" />
                    </div>

                    {/** Defina o valor do As */}
                    <div className={`${isAs ? 'flex' : 'hidden'} flex-col w-full h-full absolute inset-0 bg-primary-red/10 justify-end items-center`}>

                        <div className='relative z-[2] bottom-[2rem] flex flex-col items-center justify-center'>
                            <button onClick={() => {
                                setListaPontos([...listaPontos, 1]);
                                setIsAs(false);
                                setButtonMandaMais(false)
                                setButtonParar(false);

                                exibePontos();
                            }} className=' hover:scale-[1.1] focus-visible:scale-[1.1] focus-visible:outline-none transition-transform duration-100 linear border-2 border-white disabled:opacity-40 cursor-pointer w-[260px] p-[.5rem_2.5rem] bg-primary-black text-white  uppercase'>
                                Ás vale 1 ponto
                            </button>
                            <button onClick={() => {
                                setListaPontos([...listaPontos, 11]);
                                setIsAs(false);
                                setButtonMandaMais(false)
                                setButtonParar(false);

                                exibePontos();
                            }} className=' hover:scale-[1.1] focus-visible:scale-[1.1] focus-visible:outline-none transition-transform duration-100 linear border-2 border-white disabled:opacity-40 cursor-pointer w-[260px] p-[.5rem_2.5rem] bg-primary-black text-white  uppercase'>
                                Ás vale 11 pontos
                            </button>
                        </div>
                    </div>


                </div>

                <div className='bg-primary-red rounded-[.25rem] p-[.5rem] h-auto w-full flex flex-col gap-[.3rem] items-end max-sm:items-center justify-end max-sm:justify-center'>
                    <button disabled={buttonParar} onClick={() => {
                        setButtonMandaMais(true);
                        setButtonParar(true);
                        iniciarTurnoHusk();
                        setTurnoHusk(true);
                    }} className='disabled:opacity-40 max-sm:text-[12px] cursor-pointer w-[260px] max-sm:w-[200px] p-[.5rem_2.5rem] bg-primary-black text-primary-red hover:text-white focus-visible:text-white focus-visible:outline-none rounded-[.25rem] uppercase transition-colors duration-150 linear'>
                        Parar
                    </button>

                    <button disabled={buttonMandaMais} onClick={() => {
                        const novaCarta = baralho.puxarCarta();
                        if (novaCarta?.valor != 'A') {
                            setListaPontos(prev => [...prev, novaCarta ? (novaCarta.valor === 'J' || novaCarta.valor === 'Q' || novaCarta.valor === 'K' ? 10 : parseInt(novaCarta.valor)) : 0]);
                        } else {
                            setIsAs(true);
                            setButtonMandaMais(true)
                            setButtonParar(true)
                        }

                        setMaoInicial([...maoInicial, novaCarta])

                        exibePontos();
                    }} className='disabled:opacity-40 max-sm:text-[12px] cursor-pointer w-[260px] max-sm:w-[200px] p-[.5rem_2.5rem] bg-primary-black text-primary-red hover:text-white focus-visible:text-white focus-visible:outline-none rounded-[.25rem] uppercase transition-colors duration-150 linear'>
                        Manda mais uma
                    </button>

                    <button onClick={() => setStatus("DOACAO")} className='disabled:opacity-40 max-sm:text-[12px] cursor-pointer w-[260px] max-sm:w-[200px] p-[.5rem_2.5rem] bg-primary-black text-primary-red hover:text-white focus-visible:text-white focus-visible:outline-none rounded-[.25rem] uppercase transition-colors duration-150 linear'>
                        Fazer Doação
                    </button>
                </div>
            </main>

            <span className="absolute inset-0 h-full w-full flex items-center justify-center bg-primary-red"></span>
        </>
    )
}

export default GameStart;