import styled from "styled-components";

interface TitleTextProps {
  size?: "xl" | "l" | "m" | "s" | "xs";
  // color?: "title" | "subtitle" | "text";
  weight?: string | number;
}

interface RegularTextProps {
  size?:  "l" | "m" | "s" 
  // color?: "text" | "subtitle" | "label";
  weight?: string | number;
  width?: number;
}

export const TitleText = styled.h1<TitleTextProps>`
  color: ${({ theme }) => theme.colors["brand-red-700"]};
  font-size: ${({theme, size}) => theme.textSizes[`title-title-${size ?? "m"}`]};
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: 130%;
  font-weight: ${({ weight }) => weight ?? 400};
  text-align: center;
`

export const RegularText = styled.p<RegularTextProps>`
  color: ${({ theme }) => theme.colors["brand-silver-700"]};
  font-size: ${({theme, size}) => theme.textSizes[`text-regular-${size ?? "l"}`]};
  font-family: ${({ theme }) => theme.fonts.regular};
  width: ${({width}) => `${width ?? 650}px`};
  line-height: 130%;
  font-weight: ${({ weight }) => weight ?? 400};
  text-align: center;
`