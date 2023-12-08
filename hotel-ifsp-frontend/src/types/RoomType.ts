import { TagType } from "./TagType";

export interface RoomType {
  id: number;
  name: string;
  price: number;
  description: string;
  photo: string;
  occupantLimit: number;
  tags: TagType[];
}