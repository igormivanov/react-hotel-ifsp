import styled from "styled-components";

export const ConfirmContainer = styled.div`
  /* div:nth-child(3) {
    width: 100%;
    margin: 3rem 0;
    display: flex;
    justify-content: space-between;
    gap: 4rem;
    padding: 0 1rem;
    align-items: flex-start;
  } */

  /* @media(max-width: ${({theme}) => theme.media.tablet}){
   div {
    margin-top: 0;
    align-items: normal;
    gap: 1rem;
    justify-content: stretch;
   }
  } */
`

export const MainContent = styled.main`
    width: 100%;
    margin: 3rem 0;
    display: flex;
    justify-content: space-between;
    gap: 4rem;
    padding: 0 1rem;
    align-items: flex-start;
`

export const RoomTypeSelection = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  gap: 2rem;

  @media(max-width: ${({theme}) => theme.media.tablet}){
    width: 100%;
  }
`
export const RoomCards = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`

export const TopCard = styled.div`
  display: flex;
  gap: 1rem;

  a {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: ${({theme}) => theme.colors["brand-silver-700"]};
    transition: 0.3s ease-in-out;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const OrderDetailsMobileStyle = styled.nav`
  background: #FFFFFF;
  /* position: absolute; */
  /* top: 0; */
  padding: 1rem;
  display: none;
  margin-bottom: 1rem;
  justify-content: space-between;
  /* border-bottom: 1px solid black; */
  box-shadow: 0px 10px 16px 0px rgba(0,0,0,0.10);
  align-items: center;

  > div {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  button {
    padding: 0.5rem;
    background: ${({theme}) => theme.colors["brand-gold-300"]};
    border: none;
    color: ${({theme}) => theme.colors["brand-red-700"]};
    cursor: pointer;

    &:hover {
      background: ${({theme}) => theme.colors["brand-gold-200"]};
    }
  }

  .priceSymbol {
    font-size: 14px;
    margin-right: 0.3rem;
  }

  .price{
    font-size: 18px;
    font-weight: 600;
  }

  @media(max-width: ${({theme}) => theme.media.tablet}){
    display: flex;
  }
`
