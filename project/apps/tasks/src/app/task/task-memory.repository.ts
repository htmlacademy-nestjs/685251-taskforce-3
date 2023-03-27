import { Injectable } from '@nestjs/common';
import { Task } from '@project/shared/app-types';
import { CRUDRepository } from '@project/util/util-types'
import * as crypto from 'crypto';
import { TaskEntity } from './task.entity';

@Injectable()
export class TaskMemoryRepository implements CRUDRepository<TaskEntity, string, Task> {
    private repository: {[key: string]: Task} = {};
  
    public async create(item: TaskEntity): Promise<Task> {
      const entry = { ...item.toObject(), _id: crypto.randomUUID()};
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
      this.repository[id] = {...item.toObject(), _id: id};
      return this.findById(id);
    }

    public async show() {
      return [this.repository]
    }
  }