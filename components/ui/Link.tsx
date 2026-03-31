type LinkProps = {
    href: string;
    className?: string;
    children: React.ReactNode;
}

export const LinkRedeSociais = ({ href = '#', className = '', children }: LinkProps) => {
    return (
        <a className={`bg-black border-[2px] border-white p-[.5rem] rounded-full hover:translate-y-[-12px] focus-visible:translate-y-[-12px] transition-transform duration-200 linear ${className}`} href={href} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    )
}