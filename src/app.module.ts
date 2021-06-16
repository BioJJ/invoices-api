import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EstablishmentsModule } from './establishments/establishments.module';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://account:iBEw7z0h87lxzLs9@account.hfojy.mongodb.net/test',
    ),
    EstablishmentsModule,
    NotesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
