import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaModule } from './prisma.module';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
  imports: [PrismaModule],
})
export class DatabaseModule {}