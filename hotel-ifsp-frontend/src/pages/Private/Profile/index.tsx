import { useTheme } from "styled-components";
import { TitleText } from "../../../components/Typography";
import { ProfileContainer, UserProfile } from "./styles";
// import { useAuth } from "../../../hooks/useAuth";
// import { useForm } from 'react-hook-form';
// import * as z from 'zod';

export function ProfilePage(){

  const {colors} = useTheme();
//   const {user} = useAuth()

//   const updateUserDataFormValidationSchema = z.object({
//     cpf: z.string(),
//     adress: z.string().optional(),
//     email: z.string().email('Formato de email inválido'),
//     fullName: z.string().transform(name => {
//       return name.trim().split(' ').map(word => {
//         return word[0].toLocaleUpperCase().concat(word.substring(1))
//       }).join(' ')
//     }),
//     phone: z.string().max(11).optional(),
//   })

//  type UpdateUserDataFormData = z.infer<typeof updateUserDataFormValidationSchema>

//   const updateUserDataForm = useForm<UpdateUserDataFormData>({

//   })

  return (
    <ProfileContainer>
      <div className="container">
        <TitleText size="m" $textAlign="start" color={colors["brand-red-500"]}>
          Minha Conta
        </TitleText>
        <UserProfile>
          {/* <input type="" /> */}
        </UserProfile>
    </div>
    </ProfileContainer>
  )
}