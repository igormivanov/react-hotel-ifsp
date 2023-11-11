import { BookingPageContainer, CalendarInfo, Dates, MobileIcons, SearchButton, SelectedDates, SingleHotelInputs } from "./styles";
import { ptBR } from "date-fns/locale";
import { useEffect, useState} from "react";
import { DateRange} from "react-date-range";

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import { CalendarContainer } from "./styles";
import { format } from "date-fns";
import { RegularText } from "../../components/Typography";
import * as z from 'zod'
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../../hooks/useBooking";
import { SearchBookingInput } from "./components/SearchBookinInputs";
import { ArrowRight, CheckCircle, Lock, Timer } from "phosphor-react";
import { useTheme } from "styled-components";
import { MobileDateRange } from "./components/MobileDateRange";
import { useMediaQuery } from "react-responsive";


const newBookingSearchFormValidationSchema = z.object({ 
  rooms: z.number().min(1, "Informe a quantidade de quartos").max(5),
  guest: z.number().min(1, "Informe a quantidade de hóspedes").max(10),
})

export type NewBookingSearchFormData = z.infer<typeof newBookingSearchFormValidationSchema>

export function BookingPage(){

  const searchBookingForm = useForm<NewBookingSearchFormData>({
    resolver: zodResolver(newBookingSearchFormValidationSchema),
  })

  const { handleSubmit, setValue} = searchBookingForm;

  const {setCheckin, setCheckout ,setNumberOfGuests, setNumberOfRooms, calculateTotalPrice, resetBookingData} = useBooking();

  const [roomQuantity, setRoomQuantity] = useState(1);
  const [guestQuantity, setGuestQuantity] = useState(1);

  const { colors, media } = useTheme()

  const currentDay = new Date();
  const currentDayPlusOne = new Date(currentDay.getTime() + 86400000);

  const [range, setRange] = useState([
    {
      startDate: currentDay,
      endDate: currentDayPlusOne,
      key: 'selection',
    },
  ]);

  const navigate = useNavigate()

  useEffect(() => {
    resetBookingData()
    setValue('rooms', roomQuantity)
    setValue('guest', guestQuantity)
  }, [roomQuantity, guestQuantity])

  function handleBookingSearch(data: NewBookingSearchFormData){
    setCheckin(range[0].startDate)
    setCheckout(range[0].endDate)
    calculateTotalPrice()
    setNumberOfGuests(data.guest)
    setNumberOfRooms(data.rooms)
    navigate("/booking/confirm")
  }

  const handleDecrease = (tipo: string) => {
    if(tipo === 'guest') { 
      guestQuantity > 1 && setGuestQuantity((prev) => prev - 1)
      setValue('guest', guestQuantity);
    } else {
      roomQuantity > 1 && setRoomQuantity((prev) => prev - 1)
      setValue('rooms', roomQuantity);
    }
  };

  const handleIncrease = (tipo: string) => {
    if(tipo === 'guest'){
      setGuestQuantity((prev) => prev + 1);
      setValue('guest', guestQuantity);
    } else {
      setRoomQuantity((prev) => prev + 1);
      setValue('rooms', roomQuantity);
    }
  };

  const [open, setOpen] = useState(false)

  const isDesktopSize = useMediaQuery({ query: `(min-width: ${media.tablet})` });

  return (
    <FormProvider {...searchBookingForm}>
      <BookingPageContainer className="container">
        <form onSubmit={handleSubmit(handleBookingSearch)} >
          <SingleHotelInputs>
            <Dates>
              <div>
                <label>Check-in / Check-out</label>
                <SelectedDates onClick={() => setOpen((prevState) => !prevState)}>
                  <RegularText size="s" width="auto">{format(range[0].startDate,"dd MMM yyyy", {locale: ptBR})}</RegularText>
                  <ArrowRight size={14} color={colors["brand-silver-700"]}/>
                  <RegularText size="s" width="auto">{format(range[0].endDate, "dd MMM yyyy", {locale: ptBR})}</RegularText>
                </SelectedDates>
              </div>
              {open && !isDesktopSize ? <MobileDateRange range={range} setRange={setRange}/> : ''}
            </Dates>
              <SearchBookingInput
                name="rooms"
                label="quartos"
                onDecrease={handleDecrease}
                onIncrease={handleIncrease}
                quantity={roomQuantity}
              />
              <SearchBookingInput
                name="guest"
                label="hóspedes"
                onDecrease={handleDecrease}
                onIncrease={handleIncrease}
                quantity={guestQuantity}
              />
            
            <SearchButton type="submit">Buscar</SearchButton>
          </SingleHotelInputs>
          <CalendarContainer>
            <DateRange
                onChange={(item) => setRange([item.selection])}
                editableDateInputs={false}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={range}
                direction="horizontal"
                locale={ptBR}
                minDate={new Date()}
                rangeColors={[colors["brand-gold-300"],colors["brand-gold-400"], colors["brand-red-500"]]}
                weekdayDisplayFormat="EEEEEE"
                monthDisplayFormat="MMMM yyyy"
            />
          </CalendarContainer>
          <CalendarInfo>
            <RegularText size="xs" width="auto" $textAlign="start" color={colors["brand-red-700"]}>Diárias a partir de: <b>R$ 405</b></RegularText>
          </CalendarInfo>
        </form>
        <MobileIcons>
          <div>
            <CheckCircle size={19} color="#518209"/>
            Melhor Preço
          </div>
          <div>
            <Lock size={19} color="#518209"/>
            Transação segura
          </div>
          <div>
            <Timer size={19} color="#518209"/>
            Confirmação imediata
          </div>
        </MobileIcons>
    </BookingPageContainer>
    </FormProvider>
  )
}