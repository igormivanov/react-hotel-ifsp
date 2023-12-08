import styled from "styled-components";

export const EmptyBookingListContainer = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  margin-top: 5rem;

  a {
    color: ${({theme}) => theme.colors["brand-red-500"]};
    font-weight: 600;
  }
`