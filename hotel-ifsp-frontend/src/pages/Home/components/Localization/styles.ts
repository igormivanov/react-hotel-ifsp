import styled from "styled-components";

export const LocalizationContainer = styled.section`
  padding-bottom: 5rem;
  padding-top: 6rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: ${({theme}) => theme.media.mobile}){
    h1 {
      font-size: 2rem;
    }

    p:nth-child(3){
    width: 65%;
    }
  }
`

export const LocalizationMap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 4rem;

  iframe {
    border: 0;
    width: 500px;
    height: 300px;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  @media (max-width: 1100px) {
    justify-content: center;
    gap: 1.5rem;

    iframe {
      width: 400px;
      height: 200px;
    }

  }

  @media (max-width: ${({theme}) => theme.media.tablet}){
    flex-direction: column;
    gap: 3rem;
    

    > div {
      align-items: center;
      p {
        width: 65%;
      }
    }

    iframe {
      width: 100%;
    }
  }
`