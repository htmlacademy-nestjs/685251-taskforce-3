import { Module } from '@nestjs/common';
import { TaskModule } from '../task/task.module';
import { TaskManagerController } from './task-manager.controller';
import { TaskManagerService } from './task-manager.service';

@Module({
    imports: [TaskModule],
    controllers: [TaskManagerController],
    providers: [TaskManagerService]
})
export class TaskManagerModule {}
