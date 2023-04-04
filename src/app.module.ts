import { Module } from '@nestjs/common';
// import { NotificationsController } from './infra/http/controllers/notifications.controller';
// import { AppService } from './app.service';
// import { PrismaService } from './infra/database/prisma.service';
import { HttpModule } from '@infra/http/http.module';
import { DatabaseModule } from '@infra/database/database.module';
import { MessagingModule } from '@infra/messaging/messaging.module';

@Module({
  imports: [HttpModule, DatabaseModule, MessagingModule],
})
export class AppModule {}
