import { create } from "zustand";


interface Game{
    status: String
    getStatus: () => String
    setStatus: (status:String) => void
}

export const useGameStore = create<Game>((set, get) => ({
    status: "INICIO",
    getStatus: () => get().status,
    setStatus: (_status:String) => set(()=>{

        switch (_status){
            case "INICIO":
                return {status: _status}
            break;
            case "IN-GAME":
                return {status: _status}
            break;
            default: 
                return {}
            break;
        }
    })
}))