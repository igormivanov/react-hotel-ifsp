import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { RegularText } from "../../../../../components/Typography";

export const BookingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  /* opacity: 0.6; */

  .bookingNumber{
    font-weight: 600;
  }
  
`
interface BookingCardProps {
  expire: boolean
}

export const BookingCard = styled.div<BookingCardProps>`
  background: ${({theme}) => theme.colors["brand-silver-200"]};
  border: 1px solid ${({theme}) => theme.colors["brand-gold-400"]};
  border-radius: 4px;
  margin-top: 1rem;
  padding: 1rem 1rem 1rem 2rem;
  display: flex;
  box-shadow: 0px 6px 5px 0px rgba(0,0,0,0.10);
  justify-content: space-between;
  gap: 1rem;

  ${({expire}) => expire && css`
    opacity: 0.3;
  `}

  @media(max-width: ${({theme}) => theme.media.tablet}){
    img {
      display: none;
    }
  }
`
export const BookingDetails = styled.div`
  display: flex;
  gap: 2rem;
`


export const BookingCardTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.3rem;
  p {
    font-size: 0.75rem;
  }

  @media(max-width: ${({theme}) => theme.media.mobile}){ 
    flex-direction: column;
    align-items: normal;
  }
`

export const BookingDates = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h5 {
    font-weight: 500;
    color: ${({theme}) => theme.colors["brand-silver-700"]};
    text-transform: uppercase;
    font-size: 0.7rem;
  }

  p:nth-child(2) {
    margin-top: 0.8rem;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
  }

  p:nth-child(3) {
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 500;
  }
  
  div:nth-child(1){
    padding-right: 1rem;
    border-right: 1px dashed ${({theme}) => theme.colors["brand-silver-600"]};
  }

  div:nth-child(2){
    padding-left: 1rem;
    border-left: 1px dashed ${({theme}) => theme.colors["brand-silver-600"]};
  }
`

export const EditBooking = styled(Link)`
  font-size: 0.8rem;
  background: ${({theme}) => theme.colors["brand-gold-700"]};
  padding: 0.2rem 0.5rem;
  color: ${({theme}) => theme.colors["brand-white"]};
  border-radius: 4px;

  &:hover {
    background: ${({theme}) => theme.colors["brand-gold-400"]};
  }
`

export const GuestDetailsCheck = styled(RegularText).attrs({
  size: "s",
  $textAlign: "auto",
  width: "auto"
})`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.2rem;
  margin-bottom: 0.5rem;

  svg {
    color: ${({theme}) => theme.colors["brand-green-400"]};
  }
`

export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media(max-width: ${({theme}) => theme.media.tablet}){
    grid-template-columns: 1fr;
    div:nth-child(2){
      display: none;
    }
  }
` 