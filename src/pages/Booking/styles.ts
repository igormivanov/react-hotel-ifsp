import styled from "styled-components";

export const BookingPageContainer = styled.div`
  display: flex;
  justify-content: center;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  @media (max-width: ${({theme}) => theme.media.tablet}){
    width: 100%;
    padding: 0 2rem;
    justify-content: flex-start;
    flex-direction: column;

    form {
      width: 100%;
    }
  }
`
export const SingleHotelInputs = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: end;
  margin-top: 2.5rem;
  background: ${({theme}) => theme.colors["brand-gold-100"]};
  padding: 0.5rem;
  border-radius: 0.4rem; 

  label {
    font-size: 0.7rem;
    color: ${({theme}) => theme.colors["brand-red-700"]};
    font-weight: bold;
  }

  input {
    background: transparent;
    border: none;
    width: 25px;
    text-align: center;
    font-weight: 600;
  }

  @media (max-width: ${({theme}) => theme.media.tablet}){
    background: none;
    flex-direction: column;
    gap: 2rem;
    > div {
      /* width: 100%; */
      padding-bottom: 1.4rem;
    }

    label {
      font-size: 1rem;
      font-weight: 600;
    }

    input {
      padding: 0;
      width: 41px;
      border: none;
      font-size: 14px;
      font-weight: 600;
      text-align: center;
      &:hover{
        border: none;
      }
    }
  }
`
export const Dates = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  div:nth-child(3){
    margin: auto;
  }

  @media(max-width: ${({theme}) => theme.media.tablet}){
    width: 100%;
  }
`

export const SearchButton = styled.button`
  padding: 0.7rem 3.5rem;
  border: none;
  /* margin-top: 0.8rem; */
  background: ${({theme}) => theme.colors["brand-gold-400"]};
  border-radius: 4px;
  color: ${({theme}) => theme.colors["brand-white"]};
  font-weight: bold;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${({theme}) => theme.colors["brand-gold-700"]};
  }

  @media(max-width: ${({theme}) => theme.media.tablet}){
    width: 100%;
  }
`


export const CalendarInfo = styled.div`
  border-top: 1px solid ${({theme}) => theme.colors["brand-silver-600"]};
  /* margin-top: 0.5rem; */
  padding-top: 0.5rem;

  @media (max-width: ${({theme}) => theme.media.tablet}){
    display: none;
  }
`

export const MobileIcons = styled.div`
  padding: 2rem;
  display: none;
  justify-content: space-around;

  div {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    width: 4.5rem;
  }

  @media (max-width: ${({theme}) => theme.media.tablet}){
    display: flex;
  }
`

export const SelectedDates = styled.div`
    border: 2px solid ${({theme}) => theme.colors["brand-gold-300"]};
    border-radius: 4px;
    display: flex;
    gap: 2rem;
    padding: 0.4rem 1rem;;
    align-items: center;
    justify-content: space-around;
    height: 2.3rem;

    &:hover{
      border: 2px solid ${({theme}) => theme.colors["brand-gold-700"]};
    }
`

export const MobileDateRange = styled.div`
    .ant-calendar-range {
      width: 200px;
    }
    .ant-calendar-range-part {
      width: 100%;
    }
`

export const CalendarContainer = styled.div`

  width: 100%;
  display: flex;
  justify-content: center;

  .rdrCalendarWrapper, .rdrDateRangeWrapper{
    width: 100%;
  }

  .rdrDay{
    width: calc(100% / 7);
    height: 2.5rem;
  }

  .rdrMonth{
    width: 27rem;
  }

  .rdrMonthName{
    display: flex;
    justify-content: center;
    color: ${(({theme}) => theme.colors["brand-red-700"])};
    padding-top: 0; 
  }

  .rdrMonthsHorizontal{
    justify-content: space-around;
    gap: 3rem;
  }

  .rdrDayToday .rdrDayNumber span:after {
    background: #C0A16C !important;
  }

  .rdrDayNumber {
    font-size: 12px;
    font-weight: 700;
    line-height: 20px;
    margin-top: 4px;
  }

  .rdrDateDisplayWrapper{
    display: none;
  }

  .rdrNextPrevButton,
  .rdrPprevButton{
    background: transparent;
    border: 1px solid black;
    border-radius: 50%;
  }

  @media (max-width: ${({theme}) => theme.media.tablet}){
    display: none;
  }
`