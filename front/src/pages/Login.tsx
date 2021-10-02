import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <form method="post" action="http://localhost:3001/login">
        <input type="text" name="name" />
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
      <Link to="/register">
        <button>Sign Up</button>
      </Link>
    </>
  );
}
