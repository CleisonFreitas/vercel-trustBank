import { FormInputType } from "../types/FormInputType"

export const TextInput: React.FC<FormInputType> = ({ labelId, labelName, sx, value, addCss, count, onChange}) => {
    return (
        <div className="flex flex-col">
            <div className={`flex flex-col justify-between ${sx}`}>
                <label
                    htmlFor={labelId}
                    className="font-medium">
                    {labelName}
                </label>
                <textarea
                    name={labelId}
                    id={labelId}
                    rows={3}
                    cols={50}
                    value={value}
                    onChange={onChange}
                    maxLength={500}
                    className={`border-b border-black outline-none text-gray-700 ${addCss}`}
                ></textarea>
            </div>
            <p className="block w-full text-end text-sm text-gray-500">{count} / 500</p>
        </div>
    )
}
