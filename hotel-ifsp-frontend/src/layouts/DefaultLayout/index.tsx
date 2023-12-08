import {Outlet} from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'
import { useState } from 'react';
import { MenuMobile } from '../../components/MenuMobile';
import { useAuth } from '../../hooks/useAuth';

export function DefaultLayout(){

  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const { user } = useAuth();

  return (
    <LayoutContainer>
      <MenuMobile 
        userName={user ? user.fullName : null}
        menuIsVisible={menuIsVisible} 
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header 
        setMenuIsVisible={setMenuIsVisible}
        hasUser={user ? true : false}
        />
      <Outlet/>
    </LayoutContainer>
  )
}