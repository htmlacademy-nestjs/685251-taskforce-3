import { Controller, HttpStatus } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { TaskManagerService } from "./task-manager.service";
import { Get, Patch, Post, UseInterceptors } from "@nestjs/common/decorators/index";
import { Body, Param, UploadedFile } from '@nestjs/common/decorators/http/route-params.decorator';
import { fillObject } from '@project/util/util-core'
import { TaskRdo } from "./rdo/task.rdo";
import { Delete } from "@nestjs/common/decorators/http/request-mapping.decorator.js";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiResponse, ApiTags } from "@nestjs/swagger/dist/index.js";

@ApiTags('task-manager')
@Controller('task')
export class TaskManagerController {
    constructor (
        private readonly taskManagerService: TaskManagerService
    ) {}
    
    @ApiResponse({
        status: HttpStatus.CREATED,
        description: 'New task created'
    })
    @Post('create')
    public async create(@Body() dto: CreateTaskDto) {
        const newTask = await this.taskManagerService.createTask(dto);
        return newTask
    }

    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Tasks list'
    })
    @Get('list')
    public async show() {
        const taskList = await this.taskManagerService.show();
        return taskList
    }

    @ApiResponse({
        type: TaskRdo,
        status: HttpStatus.OK,
        description: 'Task found'
    })
    @Get(':id')
    public async getTaskById(@Param('id') id: string) {
        const task = await this.taskManagerService.getTask(id);
        return fillObject(TaskRdo, task);
    }

    @ApiResponse({
        type: TaskRdo,
        status: HttpStatus.OK,
        description: 'Task updated'
    })
    @Patch(':id')
    public async updateTaskById(@Param('id') id: string, @Body() dto:CreateTaskDto) {
        const updatedTask = await this.taskManagerService.updateTask(id, dto);
        return fillObject(TaskRdo, updatedTask);
    }

    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Task deleted'
    })
    @Delete(':id')
    public async deleteTaskById(@Param('id') id: string) {
        await this.taskManagerService.deleteTask(id);
    }

    @Post('upload') 
    @UseInterceptors(FileInterceptor('file'))
    public async uploadFile(@UploadedFile() file: string)  { //TODO заотовка для файла
        console.log(file)
    }



}