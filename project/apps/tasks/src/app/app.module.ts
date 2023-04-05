import { Module } from '@nestjs/common';
import { CommentManagerModule } from './comment-manager/comment-manager.module';
import { CommentModule } from './comment/comment.module';
import { TaskManagerModule } from './task-manager/task-manager.module';
import { TaskModule } from './task/task.module';
import { ReviewManagerModule } from './review-manager/review-manager.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [TaskModule, CommentModule, TaskManagerModule, 
    CommentManagerModule, ReviewModule, ReviewManagerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
