import styled from "styled-components";

export const LoginHeaderContainer = styled.header`
background: ${({theme}) => theme.colors["brand-white"]};
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  box-shadow: 0px 10px 16px 0px rgba(0,0,0,0.10);
  z-index: 1;
  position: relative;

  > div {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.8rem;
  }
`