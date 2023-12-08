import { Link } from "react-router-dom";
import { AuthHeaderContainer } from "./styles";
import logo from '../../../../assets/logo.svg';

export function AuthHeader(){
  return (
    <AuthHeaderContainer>
      <div>
        <Link to="/">
          <img src={logo} width="123" height="66" alt="" />
        </Link>
      </div>
    </AuthHeaderContainer>
  )
}