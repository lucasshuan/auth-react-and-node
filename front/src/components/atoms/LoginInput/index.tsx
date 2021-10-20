import { InputHTMLAttributes } from "react"
import { InputContainer } from "./style"

interface ILoginInput extends InputHTMLAttributes<HTMLInputElement>{}

export const LoginInput: React.FC<ILoginInput> = ({children, ...props}) => {
    return(
        <InputContainer>
            {children}
            <input autoComplete="off" {...props}></input>
        </InputContainer>
    ) 
}