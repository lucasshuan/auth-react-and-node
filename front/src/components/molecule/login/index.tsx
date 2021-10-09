import { LoginForm, LoginName, LoginPass, LoginSubmit } from "./style";
import { Link } from "react-router-dom";

export const LoginComponent: React.FC = () => {
  return (
    <LoginForm method="post" action="http://localhost:3001/login">
      <LoginName type="text" name="name" />
      <LoginPass type="password" name="password" />
      <LoginSubmit type="submit">Login</LoginSubmit>
      <Link to="/register">Sign Up</Link>
    </LoginForm>
  );
}