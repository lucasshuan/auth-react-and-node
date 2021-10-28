import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Logo } from "../../atoms/Logo";
import { Container, Icon, Welcome } from "./style"

interface IUser {
    name: string;
}

export const HomeComponent: React.FC = () => {
    const [allUsers, setUsers] = useState<IUser[]>([]);
    const [isExit, setIsExit] = useState(false)
    const [Logged, setLogged] = useState('');

    useEffect(() => {
        fetch("http://localhost:3001/users")
        .then((user) => user.json())
        .then((data) => setUsers(data));
        fetch("http://localhost:3001/login")
        .then((response) => response.json())
        .then((data) => setLogged(data));
    }, []);

    return(
        <Container>
            <Logo isExit={isExit} text="Home"/>
            <Icon><FaUserCircle/></Icon>
            <Welcome>Welcome <b>{Logged}</b>. :)</Welcome>
        </Container>
    )
}
