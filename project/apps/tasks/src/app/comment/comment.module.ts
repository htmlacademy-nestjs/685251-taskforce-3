import { Module } from '@nestjs/common';
import { CommentMemoryRepository } from './comment-memory.repository';

@Module({
    providers: [CommentMemoryRepository],
    exports: [CommentMemoryRepository]
})
export class CommentModule {}
