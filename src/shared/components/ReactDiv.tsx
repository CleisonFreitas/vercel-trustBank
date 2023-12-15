import { ReactDivType } from "../types/ReactDivType"

export const ReactDiv: React.FC<ReactDivType> = (
    {
        children,
        OnMouseOver,
        onClick,
        onLoad,
        style
    }) => {
    return (
        <div
            className={style}
            onClick={onClick}
            onLoad={onLoad}
            onMouseOver={OnMouseOver}>
            {children}
        </div>
    )
}
