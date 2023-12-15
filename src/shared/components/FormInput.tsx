import { FormInputType } from "../types/FormInputType"

export const FormInput: React.FC<FormInputType> = (
  { 
    sx,
    addCss,
    labelId, 
    labelName, 
    type, 
    value }) => {
  return (
    <div className={`flex flex-col justify-between h-[60px] ${sx}`}>
      <label
        htmlFor={labelId}
        className="font-medium">
        {labelName}
      </label>
      <input
        type={type}
        name={labelId}
        id={labelId}
        value={value}
        className={`border-b border-black outline-none text-gray-700 ${addCss}`}
      />
    </div>
  )
}
