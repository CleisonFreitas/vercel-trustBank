export type CustomButtonType = {
    children: React.ReactNode;
    type: "submit" | "button" | "reset";
    color: "primary" | "secondary";
    sx: string;
}

const variants = {
    primary: 'text-white bg-stone-400 font-bold flex items-center justify-center hover:bg-white hover:border hover:border-stone-400 hover:text-stone-400',
    secondary: 'text-stone-400 bg-black font-bold flex items-center justify-center hover:bg-white hover:border hover:border-black hover:text-black'
}
export const CustomButton: React.FC<CustomButtonType> = ({children, type, color, sx}) => {
    const variant = variants[color];
    return (
    <button
        type={type}
        className={`p-3 ${variant} ${sx}`}
    >
        {children}
    </button>
  )
}
