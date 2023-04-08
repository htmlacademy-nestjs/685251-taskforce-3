import { Module } from '@nestjs/common';
import { CommentModule } from '../comment/comment.module';
import { CommentManagerController } from './comment-manager.controller';
import { CommentManagerService } from './comment-manager.service';

@Module({
    imports: [CommentModule],
    controllers: [CommentManagerController],
    providers: [CommentManagerService]
})
export class CommentManagerModule {}
