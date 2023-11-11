import { RegularText } from "../../../../components/Typography";
import { InputMobileButton, SearchBookingInputContainer } from "./styles";
import { useFormContext } from 'react-hook-form';

interface SearchBookingInputProps {
  name: string,
  label: string,
  onDecrease: (inputName: string) => void;
  onIncrease: (inputName: string) => void;
  quantity: number;
}

export function SearchBookingInput({ name, label, onDecrease, onIncrease, quantity}: SearchBookingInputProps){

  const { register } = useFormContext()

  const capitalizeFirstLetter = (name: string) => {
    return name.charAt(0).toLocaleUpperCase() + name.slice(1);
  }

  // const hasError = true ? quantity < 1 && errors?.rooms?.message : ''
  const newName = capitalizeFirstLetter(label);
  // const numberOfRoomsError = errors?.rooms?.message as unknown as string
  return (
    <SearchBookingInputContainer >
        <label htmlFor={name}>{newName}</label>
        <div>
          <RegularText width="auto" size="xs">N° de {label}:</RegularText>
          <InputMobileButton $error={quantity === 1 ? true : false} type="button" onClick={() => onDecrease(`${name}`)}>-</InputMobileButton>
          <input
            id={name}
            type="number"
            min="1" max="50"
            readOnly
            {...register(`${name}`)}
          />
          <InputMobileButton type="button" onClick={() => onIncrease(`${name}`)}>+</InputMobileButton>
        </div>
        
    </SearchBookingInputContainer>
  )
}