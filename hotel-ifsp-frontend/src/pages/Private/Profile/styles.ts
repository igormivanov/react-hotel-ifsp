import styled from "styled-components";

export const ProfileContainer = styled.div`
  padding-top: 2rem;

  > div {
    padding: 0 1rem;
  }
`

export const UserProfile = styled.div`
  margin-top: 3rem;
  width: 100%;
  background: ${({theme}) => theme.colors["brand-silver-200"]};
`