import { ApiProperty } from '@nestjs/swagger';
import { Establishment } from 'src/establishments/entities/establishment.entity';

export class CreateNoteDto {
  @ApiProperty()
  total: number;

  @ApiProperty()
  establishment: Establishment;

  @ApiProperty()
  issue_date: Date;
}
