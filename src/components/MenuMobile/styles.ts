import styled, { css } from "styled-components";

interface MenuMobileContainerProps {
  isVisible: boolean
}

export const MenuMobileContainer = styled.header<MenuMobileContainerProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 5vh;
  z-index: 5;
  display: flex;
  text-align: center;
  background: ${({theme}) => theme.colors["brand-gold-200"]};
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  opacity: 0;
  pointer-events: none;
  transition: .5s;
  transform: translateY(50px);

  nav {
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
      
      a {
        color: ${({theme}) => theme.colors["brand-red-500"]};

        &:hover {
          color: ${({theme}) => theme.colors["brand-gold-700"]}
        }
      }
    }
  }

  svg {
    position: absolute;
    top: 1.75rem;
    right: 2.8rem;
    transform: rotate(45deg);
    transition: .7s;
    cursor: pointer;
    color: ${({theme}) => theme.colors["brand-red-500"]}
  }


  ${({isVisible}) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);

    > svg {
      transform: rotate(0deg);
    }
  `}
`