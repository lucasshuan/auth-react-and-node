import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <form method="post" action="http://localhost:3001/register">
        <input type="text" name="name" />
        <input type="password" name="password" />
        <button type="submit">Register</button>
      </form>
      <Link to="/">
        <button>Back to Login</button>
      </Link>
    </>
  );
}
