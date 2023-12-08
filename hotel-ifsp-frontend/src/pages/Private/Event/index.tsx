import { useTheme } from 'styled-components';
import { TitleText } from '../../../components/Typography';
import { EventContainer } from './styles';
import { EventSliders } from './Sliders';
export function EventPage(){

  const {colors} = useTheme();

  return ( 
    <EventContainer>
      <div className='container'>
        <TitleText size="m" $textAlign="start" color={colors["brand-red-500"]}>
          Eventos
        </TitleText>
        <EventSliders/>
        <p>Eventos: finais de semana, feriados e períodos de férias</p>
      </div>
    </EventContainer>
  )
}