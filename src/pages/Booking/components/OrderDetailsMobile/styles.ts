import styled, { css } from "styled-components";

interface MenuMobileContainerProps {
  isVisible: boolean
}

export const OrderDetailsMobileContainer = styled.div<MenuMobileContainerProps>`
  position: absolute;
  width: 100%;
  height: 200px;
  top: 8.5rem;
  bottom: 0;
  z-index: 0;
  display: flex;
  background: ${({theme}) => theme.colors["brand-white"]};
  flex-direction: column;
  padding: 1rem 0;
  border-top: 1px solid ${({theme}) => theme.colors["brand-gold-200"]};
  opacity: 0;
  pointer-events: none;
  transition: .5s;
  transform: translateY(5px);

  ${({isVisible}) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `}

  @media(max-width: ${({theme}) => theme.media.mobile}){
    height: 300px;
  }
`