import styled from "styled-components";

interface TitleTextProps {
  size?: "xl" | "l" | "m" | "s" | "xs";
  // color?: "title" | "subtitle" | "text";
  weight?: string | number;
  $textAlign?: string;
  color?: string;
}

interface RegularTextProps {
  size?:  "l" | "m" | "s" | "xs"
  // color?: "text" | "subtitle" | "label";
  weight?: string | number;
  width?: 'auto' | number;
  $textAlign?: string;
  color?: string;
}

export const TitleText = styled.h1<TitleTextProps>`
  color: ${({ theme, color }) => color ?? theme.colors["brand-red-700"]};
  font-size: ${({theme, size}) => theme.textSizes[`title-title-${size ?? "m"}`]};
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: 130%;
  font-weight: ${({ weight }) => weight};
  text-align: ${({$textAlign}) => $textAlign ?? 'center'};
`

export const RegularText = styled.p<RegularTextProps>`
  color: ${({ theme, color }) => color ?? theme.colors["brand-silver-700"]};
  font-size: ${({theme, size}) => theme.textSizes[`text-regular-${size ?? "l"}`]};
  font-family: ${({ theme }) => theme.fonts.regular};
  width: ${({width}) => `${typeof width === 'string' ? 'auto' : width === undefined ? '500px' : width + 'px' }`};
  line-height: 130%;
  font-weight: ${({ weight }) => weight};
  text-align: ${({$textAlign}) => $textAlign ?? 'center'};
`