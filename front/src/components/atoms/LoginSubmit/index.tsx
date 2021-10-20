import { ButtonHTMLAttributes } from "react"
import { Button } from "./style"

interface ILoginSubmit extends ButtonHTMLAttributes<HTMLButtonElement>{}

export const LoginSubmit: React.FC<ILoginSubmit> = ({...props}) => {
    return(
        <Button {...props}></Button>
    )
}