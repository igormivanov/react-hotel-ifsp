import { OrderDetailsMobileContainer } from "./styles";
import { SelectedRooms } from "../SelectedRooms";

interface MenuMobileProps {
  menuIsVisible: boolean;
}

export function OrderDetailsMobile({ menuIsVisible}: MenuMobileProps){

  return (
    <OrderDetailsMobileContainer isVisible={menuIsVisible}>
      <SelectedRooms/>
    </OrderDetailsMobileContainer>
  )
}