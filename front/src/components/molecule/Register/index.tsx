import { useCallback, useEffect, useState } from "react"
import { FaEnvelope, FaKey, FaUserAlt } from "react-icons/fa"
import { useHistory } from "react-router"
import api from "../../../services/api"
import { LoginInput } from "../../atoms/LoginInput"
import { LoginSubmit } from "../../atoms/LoginSubmit"
import { Logo } from "../../atoms/Logo"
import { Container, Signin, LoginForm } from "./style"

interface INewUser {
    email: string;
    name: string;
    password: string;
  }

export const RegisterComponent: React.FC = () => {

    const [newUser, setNewUser] = useState<INewUser>({} as INewUser);
    const [isExit, setIsExit] = useState(false);
    const [transition, setTransition] = useState("");
    const history = useHistory();

    const redirectLogin = useCallback(() => {
      setTransition("End"); setIsExit(true)}, [setIsExit]
    )

    useEffect(
      () => {
        if (isExit) {
          const funcSet = setInterval(function(){ 
            history.push("/")
            clearInterval(funcSet)
          },
          600);
        }
      }, [isExit]
    )

    async function handleSubmit(data: INewUser){
        const response = await api.post('/register', data)
        const message = response.data as any
        if (message.msg === 'already-registered'){
          console.log("already-registered")
        }
        else if (message.msg === 'registration-failed') {
          console.log("registration-failed")
        }
        else if (message.msg === 'success') {
          setIsExit(true)
          setTransition('End')
        }
    }
    
    return (
      <>
        
        <Container>
            <Logo isExit={isExit} text="Register"/>
            <LoginForm className={transition}>

                <LoginInput
                    placeholder="E-mail"
                    onChange={(event) => setNewUser({...newUser, email: event.target.value})}
                    value={newUser.email}
                    type="text" name="email">
                    <FaEnvelope/>
                </LoginInput>
                
                <LoginInput
                    placeholder="Login"
                    onChange={(event) => setNewUser({...newUser, name: event.target.value})}
                    value={newUser.name}
                    type="text" name="name">
                    <FaUserAlt/>
                </LoginInput>

                <LoginInput
                    placeholder="Password"
                    onChange={(event) => setNewUser({...newUser, password: event.target.value})}
                    value={newUser.password}
                    type="password" name="password" >
                    <FaKey/>
                </LoginInput>

                <LoginInput
                    placeholder="Repeat password"
                    onChange={(event) => console.log("changing")}
                    type="password" name="repeat-password" >
                    <FaKey/>
                </LoginInput>

                <LoginSubmit 
                    onClick={() => handleSubmit(newUser)}>
                        SIGN UP
                </LoginSubmit>

                <p>Already have an account?
                  <Signin onClick={() => redirectLogin()} disabled={isExit}>
                    <b>Sign In</b>
                  </Signin>
                </p>

            </LoginForm>


        </Container>
      </>
    )
}