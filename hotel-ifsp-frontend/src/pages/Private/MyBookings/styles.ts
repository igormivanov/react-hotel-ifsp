import styled from "styled-components";

export const MyBookingContainer = styled.div`
  padding-top: 2rem;

  > div {
    padding: 0 1rem;
    margin-bottom: 4rem;
  }

  h1 {
    letter-spacing: 0.05rem;
  }
`

export const FilterBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2.5rem;
  padding: 1rem 0;
  border-top: 1px solid ${({theme}) => theme.colors["brand-red-700"]};
  
  p {
    color: ${({theme}) => theme.colors["brand-silver-700"]};
  }

  select {
    padding: 0.2rem;
    border-color: ${({theme}) => theme.colors["brand-red-500"]};
    border-radius: 4px;
    cursor: pointer;
    

    &:focus {
      /* box-shadow: 0 3px 4px rgba(${({theme}) => theme.colors["brand-red-500"]}, 0.3) inset; */
      outline: 1px solid ${({theme}) => theme.colors["brand-red-700"]};
    }
  }

  option {
    padding: 1rem;

    &:hover {
      box-shadow: 0 0 10px 100px green inset;
    }
    &:checked {
      box-shadow: 0 0 10px 100px green inset;
    }
  }
`

export const BookingLink = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: flex-end;

  a {
    color: ${({theme}) => theme.colors["brand-red-500"]};
    text-decoration: underline;
  }
`