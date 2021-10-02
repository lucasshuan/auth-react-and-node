import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

interface IUser {
  name: string;
}

export default function Home() {
  const [allUsers, setUsers] = useState<IUser[]>([]);
  const [Logged, setLogged] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((user) => user.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/login")
      .then((response) => response.json())
      .then((data) => setLogged(data));
  }, []);

  return (
    <>
      <Link to="/">
        <button>Quit</button>
      </Link>
      <h2>Welcome {Logged}</h2>
      <ul>
        {allUsers.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}
