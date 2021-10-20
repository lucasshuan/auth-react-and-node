import { LogoText } from "./style"
import "./style.ts"
import Typewriter, { TypewriterClass } from "typewriter-effect";
import { useEffect, useState } from "react";

interface IProps {
    isExit: boolean;
    text: string;
}

export const Logo = ({isExit, text}: IProps): JSX.Element => {

    const [writer, setWriter] = useState<TypewriterClass>()
    const [transition, setTransition] = useState("Start")
    
    useEffect(
        () => {
            if (isExit) {
                setTransition("Final")
                writer?.deleteAll().start()
            }
        }, [isExit]
    )
    
    return(
        <LogoText>
                <p className={transition}>Auth</p>
                <p>
                    <Typewriter
                        options={{cursor: ".", delay:55}}
                        onInit={(typer) => {
                            typer.typeString(text).start();
                            setWriter(typer)
                        }}
                    />
                </p>
        </LogoText>
    )
}