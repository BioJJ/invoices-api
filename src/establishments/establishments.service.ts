import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEstablishmentDto } from './dto/create-establishment.dto';
import { UpdateEstablishmentDto } from './dto/update-establishment.dto';
import {
  Establishment,
  EstablishmentDocument,
} from './entities/establishment.entity';

@Injectable()
export class EstablishmentsService {
  constructor(
    @InjectModel(Establishment.name)
    private establishmentModel: Model<EstablishmentDocument>,
  ) {}

  create(createEstablishmentDto: CreateEstablishmentDto) {
    const establishment = new this.establishmentModel(createEstablishmentDto);
    return establishment.save();
  }

  findAll() {
    return this.establishmentModel.find();
  }

  findOne(id: string) {
    return this.establishmentModel.findById(id);
  }

  update(id: string, updateEstablishmentDto: UpdateEstablishmentDto) {
    return this.establishmentModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateEstablishmentDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.establishmentModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
