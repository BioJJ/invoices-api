import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EstablishmentDocument = Establishment & Document;

@Schema()
export class Establishment {
  @Prop()
  name: string;

  @Prop()
  cnpj: string;

  @Prop()
  breed: string;

  @Prop()
  timestamp: true;
}

export const EstablishmentSchema = SchemaFactory.createForClass(Establishment);
