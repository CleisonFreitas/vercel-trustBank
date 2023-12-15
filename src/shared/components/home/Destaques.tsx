import { ReactDiv } from "../ReactDiv"
import { FaInstagram } from "react-icons/fa6";

export const Destaques = () => {
  return (
    <ReactDiv style="bg-stone-200 w-full h-full flex justify-center items-center py-8 ">
      <ReactDiv style="flex flex-col">
        <h3 className="w-full text-black ">Destaque</h3>
        <ReactDiv style="w-full flex flex-col md:flex-row justify-between gap-2 ">
          <ReactDiv style="md:w-[560px] w-full h-[240px] bg-black flex flex-col justify-end p-3">
            <h3>Conheça o Crédito Consignado</h3>
            <p>Realize seus planos e reduzas as dívidas</p>
          </ReactDiv>
          <ReactDiv style="w-full flex flex-col gap-2">
            <ReactDiv style="w-full md:w-[380px] h-[120px] bg-black flex flex-col justify-end p-3">
              <h3>Seguros e Previdência</h3>
              <p>O investimento que te protege</p>
            </ReactDiv>
            <ReactDiv style="flex justify-between w-full gap-2 md:w-[380px] h-[110px]">
              <ReactDiv style="bg-black flex flex-col justify-end w-full p-3">
                <h3>Consórcio</h3>
                <p>Conquiste seus bens</p>
              </ReactDiv>
              <ReactDiv style="bg-black flex flex-col justify-end w-full p-3">
                <FaInstagram />
                <h3>Trust Bank <span className="font-bold">no</span></h3>
                <p className="font-bold">Instagram</p>
              </ReactDiv>

            </ReactDiv>
          </ReactDiv>
        </ReactDiv>
        <ReactDiv style="mt-16 mb-8 text-center w-full text-gray-700">
          Conheça a experiência Trust Bank
        </ReactDiv>
      </ReactDiv>

    </ReactDiv>
  )
}
