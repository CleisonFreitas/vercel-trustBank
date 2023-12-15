import { BannerTrust, Destaques, ReactDiv } from "../../shared"
import { FormContato } from "../../shared/components/home/FormContato"

export const Home = () => {
  return (
    <ReactDiv>
        <BannerTrust />
        <Destaques />
        <FormContato />
    </ReactDiv>
  )
}
