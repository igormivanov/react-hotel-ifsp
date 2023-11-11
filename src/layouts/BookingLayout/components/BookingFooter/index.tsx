import { Copyright, EnvelopeSimple, Phone } from "phosphor-react";
import { RegularText } from "../../../../components/Typography";
import { BookingFooterContainer } from "./styles";

export function BookingFooter(){
  return (
    <BookingFooterContainer>
      <div>
        <Copyright/>
        <RegularText size="xs" color="#FFFFFF" width="auto">
          2023 Hotel IFSP. Todos os direitos reservados.
        </RegularText>
      </div>
      <div>
        <EnvelopeSimple/>
        <RegularText size="xs" color="#FFFFFF" width="auto">
          reservas@hotelifsp.com.br
        </RegularText>
      </div>
      <div>
        <Phone/>
        <RegularText size="xs" color="#FFFFFF" width="auto">
          (11) 1234 4321
        </RegularText>
      </div>
    </BookingFooterContainer>
  )
}