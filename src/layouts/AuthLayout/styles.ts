import styled from 'styled-components';
export const AuthLayoutContainer = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors["brand-gold-100"]};

  &::before {
    content: "";
    background-image: url("https://img.freepik.com/vetores-gratis/fundo-de-vetor-de-padrao-dourado-de-forma-de-diamante_1017-13783.jpg?w=740&t=st=1699710281~exp=1699710881~hmac=8dd0ae725a4bc4381b5542d9b8969349d95f89cd37949fce51760208df457d56");
    opacity: 0.18; 
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    
  }
`