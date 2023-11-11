import { DateRange } from "react-date-range";
import { MobileDateRangeContainer } from "./styles";
import { useTheme } from "styled-components";
import {useMediaQuery} from 'react-responsive'
import { ptBR } from 'date-fns/locale'

type RangeItem = {
  startDate: Date;
  endDate: Date;
  key: string;
};

interface MobileDateRangeProps {
  range: RangeItem[]
  setRange: React.Dispatch<React.SetStateAction<RangeItem[]>>
}

export function MobileDateRange({ range, setRange} : MobileDateRangeProps){

  const { colors, media } = useTheme()

  const isMobileSized = useMediaQuery({ query: `(max-width: ${media.tablet}) and (min-width: 767px)` });

  return (
    <MobileDateRangeContainer>
      <DateRange
        onChange={item => setRange([item.selection])}
        editableDateInputs={true}
        moveRangeOnFirstSelection={false}
        ranges={range}
        locale={ptBR}
        months={isMobileSized ? 2 : 1}
        direction="horizontal"
        className="calendarElement"
        weekdayDisplayFormat="EEEEEE"
        monthDisplayFormat="MMMM yyyy"
        minDate={new Date()}
        rangeColors={[colors["brand-gold-300"],colors["brand-gold-400"], colors["brand-red-500"]]}
      />
    </MobileDateRangeContainer>
  )
}