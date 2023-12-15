import { ReactDiv } from ".."
import { ChildrenType } from "../types/ChildrenType"

export const AppContainer: React.FC<ChildrenType> = ({children}) => {
    return (
        <ReactDiv style={`overflow-y-auto w-screen h-screen bg-black grid grid-rows-[40px_80px_auto_auto]`}>
            {children}
        </ReactDiv>
    )
}
