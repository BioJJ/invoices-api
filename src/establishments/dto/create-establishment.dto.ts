import { ApiProperty } from '@nestjs/swagger';
export class CreateEstablishmentDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  cnpj: string;
}
