import { RegularText } from "../../../../components/Typography";
import { RoomInfoWithIconContainer } from './styles';
import * as Icons from "phosphor-react";

interface TagType {
  id: number,
  name: string,
  description: string,
  icon: string,
}

interface RoomInfoWithIconProps {
  tag: TagType;
  limit: number;
}

export function RoomInfoWithIcon({ tag, limit } : RoomInfoWithIconProps){
  const DynamicIcon = ({ name }: {name: string}) => {
    const IconComponent = Icons[name];
    return <IconComponent />;
  };

  return (
    <RoomInfoWithIconContainer>
      <DynamicIcon name={tag.icon}/>
      <RegularText size="xs" width="auto" $textAlign="start">
        {tag.name === 'occupantLimitTag' ? `${tag.description}: ${limit}` : tag.description }
      </RegularText>
    </RoomInfoWithIconContainer>
  )
}