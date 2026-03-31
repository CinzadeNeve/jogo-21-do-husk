'use client'

import Doacao from "@/components/pages/Doacao";
import GameStart from "@/components/pages/GameStart";
import InicioGame from "@/components/pages/InicioGame";
import { useGameStore } from "@/store/useGame";


export default function Home() {
  const { status } = useGameStore();

  if(status == "INICIO"){
    return (
      <InicioGame />
    )
  }
  else if(status == "IN-GAME"){
    return(
      <GameStart />
    )
  }
  else if(status == "DOACAO"){
    return(
      <Doacao />
    )
  }
}
