import { UserDto } from 'src/user/services/dto/userInput.dto';

export interface IUserEntity extends UserDto {
  id: string;
}