import styled, { css } from "styled-components";

interface MenuMobileContainerProps {
  isVisible: boolean
}

export const OrderDetailsMobileContainer = styled.div<MenuMobileContainerProps>`
  position: absolute;
  width: 100%;
  height: 400px;
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

  > div:nth-child(1) {
    display: flex;
    justify-content: space-around;
  }

  @media(max-width: ${({theme}) => theme.media.mobile}){
    height: 300px;
  }
`

export const SelectedDatesMobile = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    gap: 0.5rem;
  }
`

export const SelectedRoomsAndGuestsMobile = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-around;
  }

  span {
    background: ${({theme}) => theme.colors["brand-gold-100"]}; 
    padding: 0 0.5rem;
    border-radius: 50%;
  }

`