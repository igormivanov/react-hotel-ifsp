import styled from "styled-components";

export const OrderDetailsContainer = styled.section`
  width: 35%;
  background: ${({theme}) => theme.colors["brand-silver-400"]};
  border-radius: 6px;
  box-shadow: 0px 10px 16px 0px rgba(0,0,0,0.10);
  padding: 1.5rem;
  position: sticky;
  top: 20px;

  @media(max-width: ${({theme}) => theme.media.tablet}){
    display: none;
  }
`

export const StayDates = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid ${({theme}) => theme.colors["brand-gold-400"]};
  gap: 0.5rem;

  svg {
    color: ${({theme}) => theme.colors["brand-gold-700"]}
  }

  div {
    display: flex;
    gap: 1rem;
    align-items: flex-end;
  }
`

export const Details = styled.dl`

  margin-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({theme}) => theme.colors["brand-gold-400"]};

  div {
    display: flex;
    justify-content: space-between;
    margin-top: 0.3rem;
  }

  dt {
    font-size: 0.9rem;
    color: ${({theme}) => theme.colors["brand-silver-700"]}
  }

  dd {
    font-size: 0.9rem;
  }

`

export const TotalPrice = styled.div`
  
  padding-top: 1.5rem;
  border-top: 1px solid ${({theme}) => theme.colors["brand-gold-400"]};

  > div {
    display: flex;
    justify-content: space-between;
  }

  .priceSymbol {
    font-size: 0.8rem;
    margin-right: 0.2rem;
  }

  .price {
    font-weight: bold;
  }

`

export const ProceedToPaymentButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  a {
    background: ${({theme}) => theme.colors["brand-gold-300"]};
    border: 1px solid ${({theme}) => theme.colors["brand-gold-700"]};
    width: 80%;
    padding: 0.5rem;
    text-align: center;
    color: ${({theme}) => theme.colors["brand-red-700"]};
    border-radius: 4px;
    font-size: 0.9rem;

    &:hover {
      background: ${({theme}) => theme.colors["brand-gold-400"]};
      color: ${({theme}) => theme.colors["brand-white"]};
    }
  }
`

export const PromotionalCodeContainer = styled.div`
  display: flex;
  /* gap: 1rem; */
  width: 100%;
  /* align-items: flex-end; */
  margin-top: 1rem;
`

export const PromotionalCodeInput = styled.input`
  border: 1px solid ${({theme}) => theme.colors["brand-gold-400"]};
  border-radius: 4px 0 0 4px;
  padding: 0.25rem 0.25rem;
  width: 50%;
  text-transform: uppercase;
  height: 30px;

`

export const PromotionalCodeButton = styled.button`
  width: 12%;
  height: 30px;
  background: ${({theme}) => theme.colors["brand-gold-400"]};
  border: none;
  cursor: pointer;
  color: ${({theme}) => theme.colors["brand-white"]};
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 0 4px 4px 0;
`