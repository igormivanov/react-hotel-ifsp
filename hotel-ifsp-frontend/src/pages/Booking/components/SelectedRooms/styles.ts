import styled from "styled-components";

export const SelectedRoomsContainer = styled.div`

  @media(max-width: ${({theme}) => theme.media.tablet}){
    /* width: 100%; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0.5rem;
    gap: 1rem;
    border-bottom: 1px solid ${({theme}) => theme.colors["brand-gold-100"]};
  }

  @media(max-width: ${({theme}) => theme.media.mobile}){
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`

export const SelectedRoomsCard = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin: 0.5rem 0;
  padding-bottom: 0.5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .priceSymbol{
      font-size: 12px;
      margin-right: 0.2rem;
    }

    .price {
      font-size: 14px;
      font-weight: 600;
    }

    .perNight {
      font-size: 12px;
    }
  }

  @media(max-width: ${({theme}) => theme.media.tablet}){
    > div {
      justify-content: space-between;
      gap: 2rem;
      
    }
    padding: 0.5rem 2rem;
    background: ${({theme}) => theme.colors["brand-gold-200"]};
    border-radius: 6px;
  }
`

export const TrashButton = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    color: ${({theme}) => theme.colors["brand-red-700"]};
  }

  &:hover {
    svg {
      color: ${({theme}) => theme.colors["brand-red-400"]};
    }
  }
`