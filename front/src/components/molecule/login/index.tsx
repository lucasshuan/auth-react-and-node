import { useHistory } from "react-router-dom";
import React, { useEffect, useState, useCallback } from "react";
import api from "../../../services/api";
import { Container, LoginForm, Options, Signup } from "./style";
import { LoginInput } from "../../atoms/LoginInput";
import { LoginSubmit } from "../../atoms/LoginSubmit";
import { FaKey, FaUserAlt, FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { Logo } from "../../atoms/Logo";

interface IUser {
  name: string;
  password: string;
}

export const LoginComponent: React.FC = () => {

  const [user, setUser] = useState<IUser>({} as IUser);
  const [isExit, setIsExit] = useState(false);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [transition, setTransition] = useState("Start");
  const history = useHistory();

  useEffect(
    () => {
      if (isExit) {
        setTransition("End")
        const funcSet = setInterval(function(){ 
          history.push("/register")
          clearInterval(funcSet)
        },
        600);
      }
    }, [register]
  )

  useEffect(
    () => {
      if (login) {
        setTransition("End")
        const funcSet = setInterval(function(){ 
          history.push("/home")
          clearInterval(funcSet)
        },
        600);
      }
    },[login]
  )

  const redirectRegister = useCallback(() => {
    setRegister(true); setIsExit(true)}, [setIsExit]
  )

  async function handleSubmit(data: IUser){
    const response = await api.post('/login', data)
    const message = response.data as any
    if (message.msg === 'invalid-user'){
      console.log("invalid-user")
    }
    else if (message.msg === 'invalid-password') {
      console.log("invalid-password")
    }
    else if (message.msg === 'success') {
      setLogin(true); setIsExit(true)
    }
  }

  return (
    <>

      <Container>
        <Logo isExit={isExit} text="Login"/>
        <LoginForm className={transition}>

          <LoginInput
            placeholder="Login"
            onChange={(event) => setUser({...user, name: event.target.value})}
            value={user.name}
            type="text" name="name">
              <FaUserAlt/>
          </LoginInput>

          <LoginInput
            placeholder="Password"
            onChange={(event) => setUser({...user, password: event.target.value})}
            value={user.password}
            type="password" name="password" >
              <FaKey/>
          </LoginInput>

          <LoginSubmit 
            onClick={() => handleSubmit(user)}>
              LOGIN
          </LoginSubmit>
          <p>Don't have an account?
            <Signup onClick={() => redirectRegister()} disabled={isExit}>
              <b>Sign Up</b>
            </Signup>
          </p>

          <p className="LowAlpha">- or -</p>

          <Options>

            <button className="Google"><FcGoogle/></button>

            <button className="Facebook"><FaFacebookF/></button>

            <button className="Linkedin"><FaLinkedinIn/></button>

          </Options>

        </LoginForm>
        
      </Container>
    </>
  );
};