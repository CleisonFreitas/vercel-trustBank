export type FormInputType = {
    labelId: string;
    labelName: string;
    sx?: string;
    type?: string;
    value?: string;
    addCss?: string;
    count?: number;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>   ) => void;
}