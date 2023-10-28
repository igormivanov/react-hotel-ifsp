import { Link } from "react-router-dom";
import { RoomCard, RoomsCardContainer, RoomsContainer } from "./styles";
import { Line } from "../../../../components/Line";
import { RegularText, TitleText } from "../../../../components/Typography";

export function Rooms(){
  return (
    <RoomsContainer id="rooms">
      <div className='container'>
          <TitleText size="xl">Acomodações</TitleText>
          <Line/>
          <RegularText>Instalações amplas, com toda a infraestrutura para lhe atender.</RegularText>
          <RoomsCardContainer>
            <RoomCard>
              <img src="https://static.wixstatic.com/media/92c760_3580751d86e94aff902dc83658418c1f~mv2.jpg/v1/crop/x_194,y_0,w_1590,h_1174/fill/w_383,h_283,al_c,q_90,enc_auto/Su%C3%ADte_Master_411_(6).jpg" alt="" />
                <div>Suítes</div>
                <Link to="/home">
                  <button>Ver detalhes</button>
                </Link>
            </RoomCard>
            <RoomCard>
              <img src="https://static.wixstatic.com/media/92c760_07e32fc9ffc142689d9a8ca8364fb4af~mv2_d_1955_1248_s_2.jpg/v1/fill/w_383,h_283,al_c,q_90,enc_auto/Reserva%20do%20Vale%20com%20Banheira%20(3).jpg" alt="" />
              <div>Para casais</div>
              <Link to="/">
                <button>Ver detalhes</button>
              </Link>
            </RoomCard>
            <RoomCard>
              <img src="https://static.wixstatic.com/media/92c760_2ca70c1cddf44541821f0bedfbe43439~mv2_d_1924_1240_s_2.jpg/v1/fill/w_383,h_283,al_c,q_90,enc_auto/Luxo%20(5).jpg" alt="" />
              <div>Apartamentos</div>
              <Link to="/">
                <button>Ver detalhes</button>
              </Link>
            </RoomCard>
          </RoomsCardContainer>
        </div>
    </RoomsContainer>
  )
}