import { Controller, HttpStatus } from "@nestjs/common";
import { Delete, Get, Post } from "@nestjs/common/decorators/index";
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { fillObject } from '@project/util/util-core'
import { ApiResponse, ApiTags } from "@nestjs/swagger/dist/index";
import { ReviewManagerService } from "./review-manager.service";
import { CreateReviewDto } from "./dto/create-review.dto";
import { ReviewRdo } from "./rdo/review.rdo";

@ApiTags('review-manager')
@Controller('task/review')
export class ReviewManagerController {
    constructor (
        private readonly reviewManagerService: ReviewManagerService
    ) {}
    
    @ApiResponse({
        status: HttpStatus.CREATED,
        description: 'New review created',
    })
    @Post(':taskId')
    public async create(@Param('taskId') taskId: string, @Body() dto: CreateReviewDto) {
        const newTask = await this.reviewManagerService.createReviewByTaskId(taskId, dto);
        return fillObject(ReviewRdo, newTask);
    }

    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Review deleted'
    })
    @Delete(':id')
    public async deleteTaskById(@Param('id') id: string) {
        await this.reviewManagerService.deleteReview(id);
    }

    @ApiResponse({
        type: ReviewRdo,
        status: HttpStatus.OK,
        description: 'Reviews by TaskId found'
    })
    @Get(':taskId/list')
    public async showByTaskId(@Param('taskId') id:string) {
        const taskList = await this.reviewManagerService.showReviewsByTaskId(id);
        return taskList
    }

    @ApiResponse({
        type: ReviewRdo,
        status: HttpStatus.OK,
        description: 'Reviews by ID found'
    })
    @Get(':id')
    public async getReview(@Param('id') id:string) {
        const task = await this.reviewManagerService.getReview(id);
        return task
    }
}