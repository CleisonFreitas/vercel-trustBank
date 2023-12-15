export type ReactDivType = {
    children: React.ReactNode;
    style?: string;
    onClick?:(e: React.MouseEvent<HTMLInputElement>) => void;
    onLoad?:() => void;
    OnMouseOver?: () => void;
}