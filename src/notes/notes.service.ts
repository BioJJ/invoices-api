import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note, NoteDocument } from './entities/note.entity';

@Injectable()
export class NotesService {
  constructor(@InjectModel(Note.name) private noteModel: Model<NoteDocument>) {}
  create(createNoteDto: CreateNoteDto) {
    const note = new this.noteModel(createNoteDto);
    return note.save();
  }

  findAll() {
    return this.noteModel.find().populate('establishment');
  }

  findOne(id: string) {
    return this.noteModel.findById(id).populate('establishment');
  }

  update(id: string, updateNoteDto: UpdateNoteDto) {
    return this.noteModel.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateNoteDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.noteModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
