import { AiOutlineCopyrightCircle, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { RegularText } from "../../../../components/Typography";
import { BookingFooterContainer } from "./styles";

export function BookingFooter(){
  return (
    <BookingFooterContainer>
      <div>
        <AiOutlineCopyrightCircle/>
        <RegularText size="xs" color="#FFFFFF" width="auto">
          2023 Hotel IFSP. Todos os direitos reservados.
        </RegularText>
      </div>
      <div>
        <AiOutlineMail/>
        <RegularText size="xs" color="#FFFFFF" width="auto">
          reservas@hotelifsp.com.br
        </RegularText>
      </div>
      <div>
        <AiOutlinePhone/>
        <RegularText size="xs" color="#FFFFFF" width="auto">
          (11) 1234 4321
        </RegularText>
      </div>
    </BookingFooterContainer>
  )
}