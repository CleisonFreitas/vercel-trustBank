import { Outlet } from "react-router-dom"
import { ReactDiv } from ".."

export const Main = () => {
  return (
    <ReactDiv style={`bg-black text-white`}>
        <Outlet />
    </ReactDiv>
  )
}
