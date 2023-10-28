import styled from "styled-components";

export const RoomsContainer = styled.section`
  position: relative;
  height: auto;
  padding-bottom: 3rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 6rem;
    
    @media (max-width: ${({theme}) => theme.media.mobile}){
      h1 {
        font-size: ${({theme}) => theme.textSizes["title-title-l"]};
      }

      p {
        width: 60%;
      } 
    }

  }

  &::before{
    content: "";
    background-image: url("https://static.wixstatic.com/media/92c760_112370e10a15407eb7bf328938752efc~mv2_d_1972_1308_s_2.jpg/v1/fill/w_1519,h_678,al_c,q_90,enc_auto/92c760_112370e10a15407eb7bf328938752efc~mv2_d_1972_1308_s_2.jpg");
    opacity: 0.18;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`

export const RoomsCardContainer = styled.div`
  margin-top: 5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 50px;

  @media (max-width: ${({theme}) => theme.media.tablet}) {
    align-items: center;
    flex-wrap: wrap;
  }
`

export const RoomCard = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  height: auto;
  background-color: ${({theme}) => theme.colors["brand-white"]};
  box-shadow: 0px 10px 16px 0px rgba(0,0,0,0.10);

  img {
    height: 226px;
    width: 280px;
  }

  div {
    display: flex; 
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors["brand-white"]};
    margin-top: -2rem;
    width: 60%;
    height: 2rem;
    text-transform: uppercase;
    border-radius: 10px 10px 0 0;
  }

  button {
    margin-top: 3rem;
    margin-bottom: 2rem;
    padding: 0.8rem 1.5rem;
    text-transform: uppercase;
    border-radius: 0.25rem;
    border: 1px solid ${({theme}) => theme.colors["brand-silver-600"]};
    cursor: pointer;
    transition: 0.3s ease-in-out;
    color: ${({theme}) => theme.colors["brand-silver-700"]};

  &:hover {
    border: 1px solid ${({theme}) => theme.colors["brand-gold-400"]};
    color: ${({theme}) => theme.colors["brand-red-500"]};
  }
  }

  /* @media (max-width: ${({theme}) => theme.media.tablet}) {

    flex-direction: row;
    width: 80%;

    img {
      width: 60%;
    }
  } */
`