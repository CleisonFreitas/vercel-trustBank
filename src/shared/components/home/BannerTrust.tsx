import { ReactDiv } from "../ReactDiv"
import contextFile from '../../../assets/contextFile.jpeg';

export const BannerTrust = () => {
    return (
        <ReactDiv style="w-full h-[240px] flex flex-col md:flex-row justify-between">
            <ReactDiv style="text-white w-full h-full py-8 md:pl-16 flex justify-center md:justify-start items-center">
                <ReactDiv style="flex flex-col gap-4 md:gap-8">
                    <h3 className="uppercase text-2xl w-full">trust bank</h3>
                    <p className="block">Entender para atender.</p>
                </ReactDiv>
            </ReactDiv>
            <figure className="h-full">
                <img src={contextFile} className="h-[120px] md:h-full md:w-[200px] w-full" alt="exibition" />
            </figure>
        </ReactDiv>
    )
}
