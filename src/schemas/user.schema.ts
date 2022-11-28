import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    unique: true,
  })
  id: number;

  @Prop({
    type: mongoose.Schema.Types.String,
    unique: true,
  })
  email: string;

  @Prop({
    type: mongoose.Schema.Types.String,
  })
  password: string;

  @Prop({
    type: mongoose.Schema.Types.Boolean,
    default: false,
  })
  banned: boolean;

  @Prop({
    type: mongoose.Schema.Types.String,
  })
  banReason: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
