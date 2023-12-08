import styled from "styled-components";

export const EventSlidersContainer = styled.div`
  --swiper-theme-color: ${({theme}) => theme.colors["brand-red-500"]} !important;
`

export const CardContainer = styled.div`
  width: 100%;
  height: 250px;
  margin-top: 2rem;
  background-image: url("https://images.pexels.com/photos/17023017/pexels-photo-17023017/free-photo-of-banquete-festim-cereja-decoracao.jpeg?auto=compress&cs=tinysrgb&w=1000");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`