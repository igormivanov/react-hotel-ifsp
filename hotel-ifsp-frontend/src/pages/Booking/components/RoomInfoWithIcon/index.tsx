// import { Icon } from "../../../../components/Icon";
import { DynamicIcon } from "../../../../components/Icon";
import { RegularText } from "../../../../components/Typography";
import { RoomInfoWithIconContainer } from './styles';

interface TagType {
  id: number,
  name: string
  description: string,
  icon: string,
}

interface RoomInfoWithIconProps {
  tag: TagType;
  limit: number;
}

export function RoomInfoWithIcon({ tag, limit } : RoomInfoWithIconProps){
  // const icon = tag.icon
  return (
    <RoomInfoWithIconContainer>
      <DynamicIcon iconName={tag.icon}/>
      <RegularText size="xs" width="auto" $textAlign="start">
        {tag.name === 'occupantLimitTag' ? `${tag.description}: ${limit}` : tag.description }
      </RegularText>
    </RoomInfoWithIconContainer>
  )
}