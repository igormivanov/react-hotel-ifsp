import styled from "styled-components";

export const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

export const LoaderContent = styled.div`
  text-indent: -9999em;
  margin: auto;
  position: absolute;
  right: calc(50% - 6.8px);
  top: calc(50% - 16px);
  -webkit-animation-delay: 0.16s !important;
  animation-delay: 0.16s !important;
  background: #C0A16D;
  -webkit-animation: loading-keys-app-loading 0.8s infinite ease-in-out;
  animation: loading-keys-app-loading 0.8s infinite ease-in-out;
  width: 13.6px;
  height: 32px;

  &:before,
  &:after{
    position: absolute;
    top: 0;
    content: '';
    background: #C0A16D;
    -webkit-animation: loading-keys-app-loading 0.8s infinite ease-in-out;
    animation: loading-keys-app-loading 0.8s infinite ease-in-out;
    width: 13.6px;
    height: 32px;
  }

  &:before{
    left: -19.992px;
  }

  &:after{
    left: 19.992px;
    -webkit-animation-delay: 0.32s !important;
    animation-delay: 0.32s !important;
  }


  @-webkit-keyframes loading-keys-app-loading {
    0%,
    80%,
    100% {
      opacity: .75;
      box-shadow: 0 0 #076fe5;
      height: 32px;
    }

    40% {
    opacity: 1;
    box-shadow: 0 -8px #076fe5;
    height: 40px;
    }
  }

  @keyframes loading-keys-app-loading {
    0%,
    80%,
    100% {
      opacity: .75;
      box-shadow: 0 0 #C0A16D;
      height: 32px;
    }

    40% {
      opacity: 1;
      box-shadow: 0 -8px #C0A16D;
      height: 40px;
    }
  }
`