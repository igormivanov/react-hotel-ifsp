import styled, { css } from "styled-components";

interface ButtonContainerProps{
  size: "l" | "m" | "s";
  category: "header" | "slider" | "section"
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  ${({category}) => category == "header" && css`
    width: x;
    height: y;
  `}

  
`