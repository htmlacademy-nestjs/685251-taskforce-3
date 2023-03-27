import { TaskStatus } from "@project/shared/app-types";
import { TaskMemoryRepository } from "../task/task-memory.repository";
import { CreateTaskDto } from "./dto/create-task.dto";
import dayjs from 'dayjs';
import { TaskEntity } from "../task/task.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class TaskManagerService {
    constructor (
        private readonly taskRepository: TaskMemoryRepository
    ) {}

    public createTask (dto: CreateTaskDto) {
        const {title, description, category, price, deadline, image, adress, tag, city} = dto;

        const task = {
            title, description, 
            price, deadline, adress, tag, city, 
            image,
            author: '',
            category,
            date: dayjs(Date.now()).toDate(),
            status: TaskStatus.New 
        }

        const taskEntity = new TaskEntity(task);

        return this.taskRepository.create(taskEntity)
    }

    public async getTask (id: string) {
        return this.taskRepository.findById(id);
    }

    public async show () {
        return this.taskRepository.show();
    }

    public async deleteTask(id: string): Promise<void> {
        await this.taskRepository.destroy(id);
    }

    public async updateTask (id: string, dto: CreateTaskDto) {
        const {title, description, category, price, deadline, image, adress, tag, city} = dto;

        const task = {
            title, description, 
            price, deadline, adress, tag, city, 
            image,
            author: '',
            category,
            date: dayjs(Date.now()).toDate(),
            status: TaskStatus.New 
        }

        const taskEntity = new TaskEntity(task);
        return this.taskRepository.update(id, taskEntity);
        
    }
}