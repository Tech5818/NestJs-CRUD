import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

interface UserInterface {
  username: string;
  email: string;
  password: string;
}

export type UserDocument = mongoose.HydratedDocument<UserInterface>;

@Schema()
export class User {
  @Prop({ type: mongoose.Schema.Types.String, required: true })
  username: string;

  @Prop({ type: mongoose.Schema.Types.String, required: true })
  email: string;

  @Prop({ type: mongoose.Schema.Types.String, required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
