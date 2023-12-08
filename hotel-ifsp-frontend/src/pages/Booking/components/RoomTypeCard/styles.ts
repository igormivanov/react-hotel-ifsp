import styled from "styled-components";

export const RoomTypeCardContainer = styled.div`
  display: flex;
  border-bottom: 2px solid ${({theme}) => theme.colors["brand-gold-200"]};
  border-left: 3px solid transparent;
  border-radius: 8px;
  align-items: flex-start;
  padding: 1rem;
  gap: 2rem;

  &:hover {
    border-left: 3px solid ${({theme}) => theme.colors["brand-gold-200"]};
  }

  img {
    width: 30%;
    height: 100px; 
  }

  @media(max-width: ${({theme}) => theme.media.mobile}){
    flex-direction: column;
    background: ${({theme}) => theme.colors["brand-gold-100"]};
    img {
      width: 100%;
      object-fit: cover;
    }
  }
`
export const RoomTags = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 0.8rem;
  column-gap: 0.3rem;

  @media(max-width: ${({theme}) => theme.media.mobile}){
    p {
      font-size:  10px;
    }
  }
`

export const RoomInfo = styled.div`
  width: 70%;
  display: flex;
  gap:1rem;

  @media(max-width: ${({theme}) => theme.media.mobile}){
    width: 100%;
  }
`

export const RoomDescription = styled.div`
  width: 70%;

  a {
    color: ${({theme}) => theme.colors["brand-gold-700"]};
    font-size: 10px;

    &:hover{
      color: ${({theme}) => theme.colors["brand-silver-700"]};
    }
  }
`

export const RoomPrice = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.8rem;

  button {
    padding: 0.5rem 0;
    border-radius: 4px;
    border: none;
    background: ${({theme}) => theme.colors["brand-gold-400"]};
    color: ${({theme}) => theme.colors["brand-white"]};
    cursor: pointer;

    &:hover {
      background: ${({theme}) => theme.colors["brand-gold-700"]};
    }

    &:disabled {
      background: ${({theme}) => theme.colors["brand-gold-300"]};
      cursor: not-allowed;
    }
  }

  .priceSymbol{
    font-size: 12px;
  }

  .price{
    font-size: 16px;
    font-weight: bold;
  }

  .perNight{
    font-size: 10px;
    font-weight: 600;
  }
`