import {Outlet} from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'
import { useState } from 'react';
import { MenuMobile } from '../../components/MenuMobile';

export function DefaultLayout(){

  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <LayoutContainer>
      <MenuMobile 
        menuIsVisible={menuIsVisible} 
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header setMenuIsVisible={setMenuIsVisible}/>
      <Outlet/>
    </LayoutContainer>
  )
}