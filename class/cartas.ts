import imgCopas2 from "@/public/image/cartas/2_of_hearts.svg"
import imgCopas3 from "@/public/image/cartas/3_of_hearts.svg"
import imgCopas4 from "@/public/image/cartas/4_of_hearts.svg"
import imgCopas5 from "@/public/image/cartas/5_of_hearts.svg"
import imgCopas6 from "@/public/image/cartas/6_of_hearts.svg"
import imgCopas7 from "@/public/image/cartas/7_of_hearts.svg"
import imgCopas8 from "@/public/image/cartas/8_of_hearts.svg"
import imgCopas9 from "@/public/image/cartas/9_of_hearts.svg"
import imgCopas10 from "@/public/image/cartas/10_of_hearts.svg"
import imgCopasJ from "@/public/image/cartas/jack_of_hearts2.svg"
import imgCopasQ from "@/public/image/cartas/queen_of_hearts2.svg"
import imgCopasK from "@/public/image/cartas/king_of_hearts2.svg"
import imgCopasA from "@/public/image/cartas/ace_of_hearts.svg"


import imgEspadas2 from "@/public/image/cartas/2_of_spades.svg"
import imgEspadas3 from "@/public/image/cartas/3_of_spades.svg"
import imgEspadas4 from "@/public/image/cartas/4_of_spades.svg"
import imgEspadas5 from "@/public/image/cartas/5_of_spades.svg"
import imgEspadas6 from "@/public/image/cartas/6_of_spades.svg"
import imgEspadas7 from "@/public/image/cartas/7_of_spades.svg"
import imgEspadas8 from "@/public/image/cartas/8_of_spades.svg"
import imgEspadas9 from "@/public/image/cartas/9_of_spades.svg"
import imgEspadas10 from "@/public/image/cartas/10_of_spades.svg"
import imgEspadasJ from "@/public/image/cartas/jack_of_spades2.svg"
import imgEspadasQ from "@/public/image/cartas/queen_of_spades2.svg"
import imgEspadasK from "@/public/image/cartas/king_of_spades2.svg"
import imgEspadasA from "@/public/image/cartas/ace_of_spades.svg"

import imgPaus2 from "@/public/image/cartas/2_of_clubs.svg"
import imgPaus3 from "@/public/image/cartas/3_of_clubs.svg"
import imgPaus4 from "@/public/image/cartas/4_of_clubs.svg"
import imgPaus5 from "@/public/image/cartas/5_of_clubs.svg"
import imgPaus6 from "@/public/image/cartas/6_of_clubs.svg"
import imgPaus7 from "@/public/image/cartas/7_of_clubs.svg"
import imgPaus8 from "@/public/image/cartas/8_of_clubs.svg"
import imgPaus9 from "@/public/image/cartas/9_of_clubs.svg"
import imgPaus10 from "@/public/image/cartas/10_of_clubs.svg"
import imgPausJ from "@/public/image/cartas/jack_of_clubs2.svg"
import imgPausQ from "@/public/image/cartas/queen_of_clubs2.svg"
import imgPausK from "@/public/image/cartas/king_of_clubs2.svg"
import imgPausA from "@/public/image/cartas/ace_of_clubs.svg"

import imgDiamante2 from "@/public/image/cartas/2_of_diamonds.svg"
import imgDiamante3 from "@/public/image/cartas/3_of_diamonds.svg"
import imgDiamante4 from "@/public/image/cartas/4_of_diamonds.svg"
import imgDiamante5 from "@/public/image/cartas/5_of_diamonds.svg"
import imgDiamante6 from "@/public/image/cartas/6_of_diamonds.svg"
import imgDiamante7 from "@/public/image/cartas/7_of_diamonds.svg"
import imgDiamante8 from "@/public/image/cartas/8_of_diamonds.svg"
import imgDiamante9 from "@/public/image/cartas/9_of_diamonds.svg"
import imgDiamante10 from "@/public/image/cartas/10_of_diamonds.svg"
import imgDiamanteJ from "@/public/image/cartas/jack_of_diamonds2.svg"
import imgDiamanteQ from "@/public/image/cartas/queen_of_diamonds2.svg"
import imgDiamanteK from "@/public/image/cartas/king_of_diamonds2.svg"
import imgDiamanteA from "@/public/image/cartas/ace_of_diamonds.svg"



export class Cartas {
    naipe: string;
    valor: string;
    img: string | undefined;

    constructor(naipe: string, valor: string, img: string | undefined) {
        this.naipe = naipe;
        this.valor = valor;
        this.img = img;
    }
}

export class Baralho {
    cartas: Cartas[];
    segurityCarta: Cartas[];

    constructor(cartas: Cartas[]) {
        this.cartas = cartas;
        this.segurityCarta = cartas;
    }

    embaralhar() {
        for (let i = this.cartas.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            // troca os elementos
            [this.cartas[i], this.cartas[j]] = [this.cartas[j], this.cartas[i]];
        }
    }
    puxarCarta(): Cartas | undefined {
        return this.cartas.pop();
    }

    resetarBaralho() {
        this.cartas = [...this.segurityCarta];
    }
}


export const copas2 = new Cartas("copas", "2", imgCopas2.src);
export const copas3 = new Cartas("copas", "3", imgCopas3.src);
export const copas4 = new Cartas("copas", "4", imgCopas4.src);
export const copas5 = new Cartas("copas", "5", imgCopas5.src);
export const copas6 = new Cartas("copas", "6", imgCopas6.src);
export const copas7 = new Cartas("copas", "7", imgCopas7.src);
export const copas8 = new Cartas("copas", "8", imgCopas8.src);
export const copas9 = new Cartas("copas", "9", imgCopas9.src);
export const copas10 = new Cartas("copas", "10", imgCopas10.src);
export const copasJ = new Cartas("copas", "J", imgCopasJ.src);
export const copasQ = new Cartas("copas", "Q", imgCopasQ.src);
export const copasK = new Cartas("copas", "K", imgCopasK.src);
export const copasA = new Cartas("copas", "A", imgCopasA.src);

export const espadas2 = new Cartas("espadas", "2", imgEspadas2.src);
export const espadas3 = new Cartas("espadas", "3", imgEspadas3.src);
export const espadas4 = new Cartas("espadas", "4", imgEspadas4.src);
export const espadas5 = new Cartas("espadas", "5", imgEspadas5.src);
export const espadas6 = new Cartas("espadas", "6", imgEspadas6.src);
export const espadas7 = new Cartas("espadas", "7", imgEspadas7.src);
export const espadas8 = new Cartas("espadas", "8", imgEspadas8.src);
export const espadas9 = new Cartas("espadas", "9", imgEspadas9.src);
export const espadas10 = new Cartas("espadas", "10", imgEspadas10.src);
export const espadasJ = new Cartas("espadas", "J", imgEspadasJ.src);
export const espadasQ = new Cartas("espadas", "Q", imgEspadasQ.src);
export const espadasK = new Cartas("espadas", "K", imgEspadasK.src);
export const espadasA = new Cartas("espadas", "A", imgEspadasA.src);

export const paus2 = new Cartas("paus", "2", imgPaus2.src);
export const paus3 = new Cartas("paus", "3", imgPaus3.src);
export const paus4 = new Cartas("paus", "4", imgPaus4.src);
export const paus5 = new Cartas("paus", "5", imgPaus5.src);
export const paus6 = new Cartas("paus", "6", imgPaus6.src);
export const paus7 = new Cartas("paus", "7", imgPaus7.src);
export const paus8 = new Cartas("paus", "8", imgPaus8.src);
export const paus9 = new Cartas("paus", "9", imgPaus9.src);
export const paus10 = new Cartas("paus", "10", imgPaus10.src);
export const pausJ = new Cartas("paus", "J", imgPausJ.src);
export const pausQ = new Cartas("paus", "Q", imgPausQ.src);
export const pausK = new Cartas("paus", "K", imgPausK.src);
export const pausA = new Cartas("paus", "A", imgPausA.src);

export const diamante2 = new Cartas("diamante", "2", imgDiamante2.src);
export const diamante3 = new Cartas("diamante", "3", imgDiamante3.src);
export const diamante4 = new Cartas("diamante", "4", imgDiamante4.src);
export const diamante5 = new Cartas("diamante", "5", imgDiamante5.src);
export const diamante6 = new Cartas("diamante", "6", imgDiamante6.src);
export const diamante7 = new Cartas("diamante", "7", imgDiamante7.src);
export const diamante8 = new Cartas("diamante", "8", imgDiamante8.src);
export const diamante9 = new Cartas("diamante", "9", imgDiamante9.src);
export const diamante10 = new Cartas("diamante", "10", imgDiamante10.src);
export const diamanteJ = new Cartas("diamante", "J", imgDiamanteJ.src);
export const diamanteQ = new Cartas("diamante", "Q", imgDiamanteQ.src);
export const diamanteK = new Cartas("diamante", "K", imgDiamanteK.src);
export const diamanteA = new Cartas("diamante", "A", imgDiamanteA.src);

export const baralho = new Baralho([
    copas2, copas3, copas4, copas5, copas6, copas7, copas8, copas9, copas10, copasJ, copasQ, copasK, copasA,
    espadas2, espadas3, espadas4, espadas5, espadas6, espadas7, espadas8, espadas9, espadas10, espadasJ, espadasQ, espadasK, espadasA,
    paus2, paus3, paus4, paus5, paus6, paus7, paus8, paus9, paus10, pausJ, pausQ, pausK, pausA,
    diamante2, diamante3, diamante4, diamante5, diamante6, diamante7, diamante8, diamante9, diamante10, diamanteJ, diamanteQ, diamanteK, diamanteA
])