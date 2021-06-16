import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Establishment } from 'src/establishments/entities/establishment.entity';

export type NoteDocument = Note & Document;

@Schema()
export class Note {
  @Prop()
  total: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Establishment' })
  establishment: Establishment;

  @Prop()
  issue_date: Date;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
