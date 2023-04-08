import { Controller, HttpStatus } from "@nestjs/common";
import { Delete, Get, Post } from "@nestjs/common/decorators/index";
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { fillObject } from '@project/util/util-core'
import { CommentManagerService } from "./comment-manager.service";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { CommentRdo } from "./rdo/comment.rdo";
import { ApiResponse, ApiTags } from "@nestjs/swagger/dist/index.js";

@ApiTags('comment-manager')
@Controller('task/comment')
export class CommentManagerController {
    constructor (
        private readonly commentManagerService: CommentManagerService
    ) {}
    
    @ApiResponse({
        status: HttpStatus.CREATED,
        description: 'New comment created',
    })
    @Post(':taskId')
    public async create(@Param('taskId') taskId: string, @Body() dto: CreateCommentDto) {
        const newTask = await this.commentManagerService.createCommentByTaskId(taskId, dto);
        return fillObject(CommentRdo, newTask);
    }

    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Comment list'
    })
    @Get('list')
    public async show() {
        const taskList = await this.commentManagerService.show();
        return taskList
    }

    @ApiResponse({
        type: CommentRdo,
        status: HttpStatus.OK,
        description: 'Comment by id found'
    })
    @Get(':id')
    public async getCommentById(@Param('id') id: string) {
        const task = await this.commentManagerService.getComment(id);
        return fillObject(CommentRdo, task);
    }

    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Comment deleted'
    })
    @Delete(':id')
    public async deleteTaskById(@Param('id') id: string) {
        await this.commentManagerService.deleteComment(id);
    }

    @ApiResponse({
        type: CommentRdo,
        status: HttpStatus.OK,
        description: 'Comments by TaskId found'
    })
    @Get(':taskId/list')
    public async showByTaskId(@Param('taskId') id:string) {
        const taskList = await this.commentManagerService.showCommentsByTaskId(id);
        return taskList
    }


}