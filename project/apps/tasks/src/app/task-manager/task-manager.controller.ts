import { Controller } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { TaskManagerService } from "./task-manager.service";
import { Get, Patch, Post } from "@nestjs/common/decorators/index";
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { fillObject } from '@project/util/util-core'
import { TaskRdo } from "./rdo/task.rdo";



@Controller('task')
export class TaskManagerController {
    constructor (
        private readonly taskManagerService: TaskManagerService
    ) {}
    
    @Post('create')
    public async create(@Body() dto: CreateTaskDto) {
        const newTask = await this.taskManagerService.createTask(dto);
        return newTask
    }

    @Get('list')
    public async show() {
        const taskList = await this.taskManagerService.show();
        return taskList
    }

    @Get(':id')
    public async getTaskById(@Param('id') id: string) {
        const task = await this.taskManagerService.getTask(id);
        return fillObject(TaskRdo, task);
    }

    @Patch(':id')
    public async updateTaskById(@Param('id') id: string, @Body() dto:CreateTaskDto) {
        const updatedTask = await this.taskManagerService.updateTask(id, dto);
        return fillObject(TaskRdo, updatedTask);
    }


}