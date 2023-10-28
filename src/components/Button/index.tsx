import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  size: "l" | "m" | "s";
  category: "header" | "slider" | "section"
}

export function Button({ text, size, category, ...props } : ButtonProps){
  return (
    <ButtonContainer size={size} category={category} {...props}>
      {text}
    </ButtonContainer>
  )
}