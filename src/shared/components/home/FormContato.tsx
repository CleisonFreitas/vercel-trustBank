import { useCallback, useState } from "react";
import { FormInput } from "../FormInput";
import { ReactDiv } from "../ReactDiv"
import { TextInput } from "../TextInput";
import { CustomButton } from "../..";

const text = `Entre em contato conosco para falar sobre as suas necessidades Financeiras.`;

type TextFieldType = {
  label: string;
  count: number;
}
export const FormContato: React.FC = () => {

  const [comentario, setComentario] = useState<TextFieldType>({
    label: '',
    count: 0,
  });

  const handleTextChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const updatedValue = event.target.value;
      setComentario({
        label: updatedValue,
        count: updatedValue.length,
      });
    },
    []
  );

  return (
    <ReactDiv style="bg-stone-400 w-full h-auto md:h-[540px] flex flex-col md:flex-row justify-around gap-2 items-center md:px-16">
      <ReactDiv style="w-full md:w-[300px]">
        <p className="font-light text-2xl text-stone-700">{text}</p>
      </ReactDiv>
      <ReactDiv>
        <form className="w-[full] md:w-[560px] h-[540px] flex flex-col gap-8 box-border border-t border-t-amber-700 bg-white py-16 px-8 text-black">
          <div className="w-[50%] flex justify-between items-center gap-2">
            <FormInput
              labelId="nome"
              labelName="Nome*"
              type="text"
              sx="w-full"
            />
            <FormInput
              labelId="sobrenome"
              labelName="Sobrenome*"
              type="text"
              sx="w-full"
            />
          </div>

          <div className="w-full flex items-center gap-2">
            <FormInput
              labelId="email"
              labelName="Email*"
              type="text"
              sx="w-full"
            />
          </div>

          <div className="w-[50%] flex items-center gap-2">
            <FormInput
              labelId="contato"
              labelName="Contato*"
              type="text"
              sx="w-full"
            />
            <FormInput
              labelId="email"
              labelName="Email*"
              type="email"
              sx="w-full"
            />
          </div>

          <div className="w-full flex items-center">
            <TextInput
              labelId="comentario"
              labelName="Comentário"
              sx="w-full"
              value={comentario.label}
              count={comentario.count}
              onChange={handleTextChange}
              addCss="border border-gray-400 p-1"
            />
          </div>
          <CustomButton
            color="primary"
            type="submit"
            sx="w-[80px] -mt-8">Enviar
          </CustomButton>
        </form>
      </ReactDiv> 
    </ReactDiv>
  )
}
