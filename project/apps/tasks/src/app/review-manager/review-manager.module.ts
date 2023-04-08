import { Module } from '@nestjs/common';
import { ReviewManagerService } from './review-manager.service';
import { ReviewManagerController } from './review-manager.controller';
import { ReviewModule } from '../review/review.module';

@Module({
    imports: [ReviewModule],
    controllers: [ReviewManagerController],
    providers: [ReviewManagerService]
})
export class ReviewManagerModule {}
