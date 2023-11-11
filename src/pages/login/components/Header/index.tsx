import { Link } from "react-router-dom";
import { LoginHeaderContainer } from "./styles";
import logo from '../../../../assets/logo.svg'

export function LoginHeader(){
  return (
    <LoginHeaderContainer>
        <div className="container">
          <Link to="/">
            <img src={logo} width="123" height="66" alt="" />
          </Link>
        </div>
    </LoginHeaderContainer>
  )
}