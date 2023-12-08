import styled from "styled-components";

export const MobileDateRangeContainer = styled.div`
  display: flex;
  justify-content: center;
  /* background: #f0f1f2;s */

  .rdrDateDisplayWrapper{
    display: none;
  }

  .rdrDayToday .rdrDayNumber span:after {
    background: #C0A16C !important;
  }
`