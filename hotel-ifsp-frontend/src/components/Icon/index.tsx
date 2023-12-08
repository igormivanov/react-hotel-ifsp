import { IconBaseProps } from "react-icons";
import * as icons from 'react-icons/ai'


interface TypesPropsIcon {
  iconName: string
  propsIcon?: IconBaseProps
}

export function DynamicIcon({ iconName, propsIcon }: TypesPropsIcon) {
  const IconComponent = icons[iconName as keyof typeof icons];
  return <IconComponent {...propsIcon} />
}

