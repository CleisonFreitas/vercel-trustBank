import { useState } from "react";
import { ReactDiv } from ".."
import { BiWorld } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const FirstOption = () => {
    const [openOption, setOpenOption] = useState<boolean>(false);

    const handleState = () => {
        setOpenOption((prev => !prev));
    }

    return (
        <ReactDiv style="bg-black text-white">
            <ReactDiv style="w-full flex justify-end items-center pr-6 py-1">
                <BiWorld />
                <button
                    onClick={handleState}
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                    className="
                    flex
                    gap-1
                    text-white 
                    font-lg 
                    rounded-lg 
                    text-center 
                    items-center 
                    py-1
                    px-2 
                    dark:bg-blue-600 
                    dark:hover:bg-blue-700 
                    dark:focus:ring-blue-800"
                    type="button">português
                    {openOption ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
                <ReactDiv
                    style={`${openOption ? '' : 'hidden'} absolute -top-1 bg-slate-100 rounded-b-lg flex flex-col justify-between items-center`}>
                    <ReactDiv style="py-3 h-32 w-32 flex flex-col justify-between items-center font-bold">
                        <ReactDiv
                            onClick={handleState}
                            style="cursor-pointer flex w-full font-bold text-black gap-4 items-center justify-center">
                            <BiWorld />
                            <p>idioma</p>
                            <IoIosArrowUp />
                        </ReactDiv>
                        <ReactDiv style="text-gray-800 font-medium underline flex flex-col gap-2 mt-2">
                            <p>português</p>
                            <p>inglês</p>
                        </ReactDiv>
                    </ReactDiv>
                </ReactDiv>
            </ReactDiv>
        </ReactDiv>
    )
}
