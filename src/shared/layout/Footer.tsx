import { ReactDiv } from ".."

const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
export const Footer = () => {
    return (
        <ReactDiv style={`bg-black text-white h-auto grid grid-cols-[280px_calc(100%-290px)] w-full gap-1 justify-between items-center bg-white mb-2`}>
            <ReactDiv style="pl-2 flex flex-col text-justify justify-center h-full bg-black pt-16">
                <h3>Logo Marca</h3>
                <ReactDiv style="flex flex-col gap-1">
                    <p><span className="font-bold">Fale conosco</span></p>
                    <p>contato@contato.com</p>
                    <p>Tel: (85) 98544-2541</p>
                    <p>Complemento</p>
                </ReactDiv>
                <ReactDiv style="flex flex-col gap-1">
                    <p>Rua Pedro Borges,1300, Sala 0001 - Centro</p>
                    <p>CEP: 60521-452</p>
                </ReactDiv>
            </ReactDiv>
            <ReactDiv style="flex flex-col justify-between py-2 gap-2 bg-black h-full">
                <p className="text-justify">
                    {text}
                </p>
                <p>2023 Trust Brasil S.A CNPJ 420000000</p>
            </ReactDiv>
        </ReactDiv>
    )
}
