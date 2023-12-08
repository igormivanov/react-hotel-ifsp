import { RegularText, TitleText } from "../../../../components/Typography";
import { RoomInfoWithIcon } from "../RoomInfoWithIcon";
import { RoomDescription, RoomInfo, RoomPrice, RoomTags, RoomTypeCardContainer } from "./styles";
import { useBooking } from "../../../../hooks/useBooking";

interface TagType {
  id: number,
  name: string,
  description: string,
  icon: string,
}

interface RoomTypes {
  id: number;
  name: string;
  price: number;
  description: string;
  photo: string;
  occupantLimit: number;
  tags: TagType[];
}

interface RoomTypeCardProps{
  room: RoomTypes;
  setRoomTypeError: React.Dispatch<React.SetStateAction<boolean>>
}

export function RoomTypeCard({ room, setRoomTypeError } : RoomTypeCardProps){

  const {calculateTotalPrice, setRoomType, booking } = useBooking();

  function handleRoomTypeSelection(event: React.MouseEvent<HTMLButtonElement>){
    event.preventDefault();
    setRoomType(room.id);
    calculateTotalPrice();
    setRoomTypeError(false);
  }

  return (
    <RoomTypeCardContainer>
      <img src={room.photo} alt="" />
      <RoomInfo>
        <RoomDescription>
          <TitleText size="xs" $textAlign="start" weight={600}>{room.name}</TitleText>
          <RoomTags>
            {room.tags.map((tag) => {
              return (
                <RoomInfoWithIcon
                  key={tag.id}
                  tag={tag}
                  limit={room.occupantLimit}
                />
              )
            })}
          </RoomTags>
          <a href="#">Ver detalhes do quarto</a>
        </RoomDescription>
        <RoomPrice>
          <RegularText size="xs" width="auto" color="#518209">
            <span className="priceSymbol">R$ </span>
            <span className="price">{room.price} </span>
            <span className="perNight">/noite</span>
          </RegularText>
          <button 
            disabled={booking.roomType.length >= booking.rooms} 
            onClick={handleRoomTypeSelection} 
          >
            Escolher
          </button>
        </RoomPrice>
      </RoomInfo>
    </RoomTypeCardContainer>
  )
}