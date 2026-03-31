import { ButtonHTMLAttributes } from "react";
import imgCarta from "@/public/image/cartas/queen_of_clubs2.svg"

type ButtonPrimaryProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};
export const ButtonPrimary = ({className = '', children, ...props}:ButtonPrimaryProps) =>{
    return(
        <button className={`group relative bg-primary-black rounded-2xl text-[1rem] text-white p-[.5rem_2rem] cursor-pointer uppercase hover:scale-[1.1] transition-transform duration-300 linear border-2 border-white ${className}`} {...props}>
            {children}
        </button>
    )
}