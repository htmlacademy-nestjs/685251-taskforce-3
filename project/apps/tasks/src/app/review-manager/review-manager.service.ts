import dayjs from 'dayjs';
import { Injectable } from "@nestjs/common";
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewMemoryRepository } from '../review/review-memory.repository';
import { ReviewEntity } from '../review/review.entity';

@Injectable()
export class ReviewManagerService {
    constructor (
        private readonly reviewRepository: ReviewMemoryRepository
    ) {}

    private prepareEntity (dto: CreateReviewDto) {
        const {text,author, rating} = dto;

        const review = {
            text,
            author, //TODO связать с микросервисом users
            date: dayjs(Date.now()).toDate(),
            rating
        }

        return new ReviewEntity(review);
    }

    public async createReviewByTaskId (taskId: string, dto: CreateReviewDto) {
        const entityWithTaskId = await this.reviewRepository.createByTaskId(taskId, this.prepareEntity(dto))
        return entityWithTaskId
    }


    public async updateReview (id: string, dto: CreateReviewDto) {
        return this.reviewRepository.update(id, this.prepareEntity(dto));
        
    }

    public async getReview (id: string) {
        return this.reviewRepository.findById(id);
    }

    public async show () {
        return this.reviewRepository.show();
    }

    public async deleteReview(id: string): Promise<void> {
        await this.reviewRepository.destroy(id);
    }
    
    public async showReviewsByTaskId (id: string) {
        return this.reviewRepository.showByTaskId(id);
        
    }
}