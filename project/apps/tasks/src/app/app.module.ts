import { Module } from '@nestjs/common';
import { CommentModule } from './comment/comment.module';
import { TaskManagerModule } from './task-manager/task-manager.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [TaskModule, CommentModule, TaskManagerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
