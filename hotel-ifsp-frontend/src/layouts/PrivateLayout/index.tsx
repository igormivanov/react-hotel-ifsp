import { Outlet } from "react-router-dom";
import { PrivateLayoutContainer } from "./styles";
import { PrivateHeader } from "./components/PrivateHeader";
import { PrivateMobileHeader } from "./components/PrivateMobileHeader";
import { useState } from "react";

export function PrivateLayout(){

  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <PrivateLayoutContainer>
      <PrivateMobileHeader
        menuIsVisible={menuIsVisible} 
        setMenuIsVisible={setMenuIsVisible}
      />
      <PrivateHeader 
        setMenuIsVisible={setMenuIsVisible}
      />
      <Outlet/> 
    </PrivateLayoutContainer>
  )
}