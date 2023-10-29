import styled from "styled-components";
import { ButtonBaseStyle } from "../../styles";

export const SlidersContainer = styled.section`
  --swiper-theme-color: ${({theme}) => theme.colors["brand-gold-400"]} !important;

  video {
    width: 100%; 
    height: 580px;
    object-fit: cover;
  }

  button {
    color: ${({theme}) => theme.colors["brand-red-700"]};
  }

  @media (max-width: 1100px){
    video {
      filter: brightness(20%);
    }
  }

  @media (max-width: ${({theme}) => theme.media.mobile}){
    .swiper-button-next,
    .swiper-button-prev{
      display: none;
    }
  }

`

export const LinkButton = styled(ButtonBaseStyle)`
  padding: 0.85rem 2.75rem;
  background: ${({theme}) => theme.colors["brand-silver-400"]};
  border: 1px solid ${({theme}) => theme.colors["brand-gold-400"]};

  &:hover {
    background-color: ${({theme}) => theme.colors["brand-gold-300"]};
  }

  a {
    color: ${({theme}) => theme.colors["brand-gold-100"]}
  }

  @media (max-width: ${({theme}) => theme.media.mobile}){
    padding: 1rem;
  }
`

export const SpaDescription = styled.div`
  width: 500px;
  top: 30%;
  left: 40%;
  position: absolute;
  text-align: center;
  font-family: 'Cormorant Garamond', serif;

  h1 {
    color: ${({theme}) => theme.colors["brand-gold-400"]};
    font-size: 3.5rem;
  }

  p:nth-child(2) {
    color: ${({theme}) => theme.colors["brand-gold-400"]};
    font-size: 2.3rem;
    margin-bottom: 2rem;
  }

  p:nth-child(3) {
    margin-bottom: 2rem;
    letter-spacing: -0.1px;
    line-height: 1.25rem;
    font-size: 1.2rem;
    font-weight: 600;
  }

  @media (max-width: ${({theme}) => theme.media.tablet}) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    p:nth-child(3) {
    color: ${({theme}) => theme.colors["brand-gold-100"]};
  }
  }

  @media (max-width: ${({theme}) => theme.media.mobile}){
    background-color: ${({theme}) => theme.colors["brand-silver-400"]};
    
    width: 100%;
    height: 584px;
    transform: none;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    h1 {
      font-size: 2rem;
    }

    p:nth-child(2) {
      font-size: 1.5rem;
      width: 50%;
      margin: 0 auto;
      margin-bottom: 2rem;
    }

    p:nth-child(3) {
      color: ${({theme}) => theme.colors["brand-silver-700"]};
      font-size: 1rem;
      width: 50%;
      margin: 0 auto;
      margin-bottom: 2rem;
    }
  }
`



export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: ${({theme}) => theme.media.mobile}){
    justify-content: space-around;
    flex-direction: column;
    gap: 0.5rem;

    a:nth-child(2){
      display: none;
    }
  }
`

export const NatalDescription = styled.div`
  width: 400px;
  top: 20%;
  left: 68%;
  position: absolute;
  text-align: center;
  font-family: 'Cormorant Garamond', serif;
  text-transform: uppercase;

  h1 {
    color: ${({theme}) => theme.colors["brand-gold-400"]};
    font-size: 3rem;
    font-weight: 600;
    
  }

  p:nth-child(2) {
    color: ${({theme}) => theme.colors["brand-white"]};
    font-size: 1.1rem;
    margin-top: 1.5rem;
    font-weight: bold;
  }

  p:nth-child(3) {
    margin-top: 0.5rem;
    letter-spacing: 160%;
    line-height: 1.25rem;
    font-size: 1.1rem;
    color: ${({theme}) => theme.colors["brand-white"]};
    margin-bottom: 2rem;
  }

  @media (max-width: 1400px) {
    left: 62%;
    h1 {
      font-size: 2.5rem;
    }

    p:nth-child(2) {
      margin: 1rem auto;
      width: 300px;
    }

    p:nth-child(3) {
      margin: 0.5rem auto;
      width: 300px;
    }
  }

  @media (max-width: 1100px){
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export const NatalButton = styled(ButtonBaseStyle)`
  padding: 0.85rem 2.75rem;
  background: ${({theme}) => theme.colors["brand-gold-400"]};
  border: 3px solid ${({theme}) => theme.colors["brand-gold-400"]};

  a {
    color: ${({theme}) => theme.colors["brand-gold-100"]};
  }

  &:hover {
    border: 3px solid ${({theme}) => theme.colors["brand-gold-700"]};
    background-color: transparent;
    color: ${({theme}) => theme.colors["brand-gold-100"]};
  }

  @media (max-width: 1400px) {
    margin-top: 1.5rem;
  }

  @media (max-width: ${({theme}) => theme.media.mobile}){
    padding: 0.5rem;
  }
`

export const LoveDescription = styled.div`
  width: 550px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  text-align: center;
  background-color: rgba(192, 161, 109, 0.4);
  padding: 2rem;


  h1 {
    color: ${({theme}) => theme.colors["brand-white"]};
    font-size: 1.5rem;
  }

  p:nth-child(2) {
    color: ${({theme}) => theme.colors["brand-white"]};
    margin-top: 1.5rem;
    letter-spacing: 160%;
    line-height: 1.25rem;
  }

  p:nth-child(3) {
    margin-top: 1rem;
    font-size: 1.2rem;
    color: ${({theme}) => theme.colors["brand-white"]};
    font-weight: bold;
  }

  @media (max-width: ${({theme}) => theme.media.mobile}) {
    width: 65%;

    h1 {
      font-size: 1rem;
    }

    p:nth-child(2), 
    p:nth-child(3){
    font-size: 0.9rem;
    }
  }
`

export const SpaContainer = styled.div`

  img {
    height: 580px;
    width: 100%;
    background-size: cover;
  }
  @media (max-width: ${({theme}) => theme.media.tablet}){
    img {
      filter: brightness(30%);
    }
  }

  @media (max-width: ${({theme}) => theme.media.mobile}){
    img {
      display: none;
    }
  }
`

export const LoveButton = styled(ButtonBaseStyle)`
  padding: 0.85rem 2.75rem;
  background: ${({theme}) => theme.colors["brand-gold-400"]};
  border: 3px solid ${({theme}) => theme.colors["brand-gold-400"]};

  a {
    color: ${({theme}) => theme.colors["brand-gold-100"]};
  }

  &:hover {
    border: 3px solid ${({theme}) => theme.colors["brand-gold-700"]};
    background-color: transparent;
    color: ${({theme}) => theme.colors["brand-gold-100"]};
  }

    @media (max-width: 1400px) {
      margin-top: 1.5rem;
    }

  @media (max-width: ${({theme}) => theme.media.mobile}){
    padding: 0.5rem;
  }
`