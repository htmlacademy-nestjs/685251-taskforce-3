import { TaskStatus } from "@project/shared/app-types";
import { TaskMemoryRepository } from "../task/task-memory.repository";
import { CreateTaskDto } from "./dto/create-task.dto";
import { TaskEntity } from "../task/task.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class TaskManagerService {
    constructor (
        private readonly taskRepository: TaskMemoryRepository
    ) {}

    private prepareEntity (dto: CreateTaskDto) {
        const {title, description, category, price, deadline, image, adress, tag, city} = dto;

        const task = {
            title, description, 
            price, deadline, adress, tag, city, 
            image,
            author: '', //TODO связать с USERS (пока неумеем)
            category,
            status: TaskStatus.New 
        }

        return new TaskEntity(task);
    }

    public createTask (dto: CreateTaskDto) {
        return this.taskRepository.create(this.prepareEntity(dto))
    }

    public async updateTask (id: string, dto: CreateTaskDto) {
        return this.taskRepository.update(id, this.prepareEntity(dto));
        
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

    
}