import { Module } from '@nestjs/common';
import { DatabaseModule } from './prisma/database.module';
import { UserService } from './user/services/user.service';
import { UserController } from './user/user.controller';
import { UserRepository } from './user/user.repository';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';


@Module({
    imports: [DatabaseModule, AuthModule,],
    controllers: [UserController],
    providers: [UserService, UserRepository] 
})

export class AppModule {}