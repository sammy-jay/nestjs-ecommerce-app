import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from '../../auth/enums/role.enum';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  roles: Role[];
}

export const UserSchema = SchemaFactory.createForClass(User);
