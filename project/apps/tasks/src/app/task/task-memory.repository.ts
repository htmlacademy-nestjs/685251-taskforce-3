import { Injectable } from '@nestjs/common';
import { Task } from '@project/shared/app-types';
import { CRUDRepository } from '@project/util/util-types'
import * as crypto from 'crypto';
import dayjs from 'dayjs';
import { TaskEntity } from './task.entity';

@Injectable()
export class TaskMemoryRepository implements CRUDRepository<TaskEntity, string, Task> {
    private repository: {[key: string]: Task} = {};
  
    public async create(item: TaskEntity): Promise<Task> {
      const entry = { ...item.toObject(), _id: crypto.randomUUID(), date: dayjs(Date.now()).toDate()};
      this.repository[entry._id] = entry;
  
      return {...entry};
    }
  
    public async findById(id: string): Promise<Task> {
      if (this.repository[id]) {
        return {...this.repository[id]};
      }
  
      return null;
    }
  
    public async findByCategory(category: string): Promise<Task | null> {
      const categoryTasks = Object.values(this.repository)
        .find((taskItem) => taskItem.category === category);
  
      if (! categoryTasks) {
        return null;
      }
  
      return { ...categoryTasks};
    }
  
    public async destroy(id: string): Promise<void> {
      delete this.repository[id];
    }
  
    public async update(id: string, item: TaskEntity): Promise<Task> {
      const oldEntity = await this.findById(id);
      const newEntity = {...item.toObject(), id: oldEntity._id,  date: oldEntity.date};
      const updatedEntity = Object.assign(oldEntity, newEntity)
      this.repository[id] = {...updatedEntity}
      return {...this.repository[id]}
    }

    public async show() {
      return [this.repository]
    }
  }