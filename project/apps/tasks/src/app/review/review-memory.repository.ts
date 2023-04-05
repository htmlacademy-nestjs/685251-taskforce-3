import { Injectable } from '@nestjs/common';
import { Comment } from '@project/shared/app-types';
import { CRUDRepository } from '@project/util/util-types'
import * as crypto from 'crypto';
import { ReviewEntity } from './review.entity';


@Injectable()
export class ReviewMemoryRepository implements CRUDRepository<ReviewEntity, string, Comment> {
    private repository: {[key: string]: Comment} = {};
  
    public async create(item: ReviewEntity): Promise<Comment> {
      const entry = { ...item.toObject(), _id: crypto.randomUUID()};
      this.repository[entry._id] = entry;
      return {...entry};
    }

    public async createByTaskId (taskId: string, item: ReviewEntity): Promise<Comment> {
      const entity = await this.create(item);
      this.repository[entity._id].taskId = taskId;
      return {...entity, taskId}
    }
  
    public async findById(id: string): Promise<Comment> {
      if (this.repository[id]) {
        return {...this.repository[id]};
      }
  
      return null;
    }
  
    public async destroy(id: string): Promise<void> {
      delete this.repository[id];
    }
  
    public async update(id: string, item: ReviewEntity): Promise<Comment> {
      this.repository[id] = {...item.toObject(), _id: id};
      return this.findById(id);
    }

    public async show() {
      return [this.repository]
    }

    public async showByTaskId (id: string) {
    const data = this.repository
    const filteredTasks = Object.keys(data)
      .filter(key => data[key].taskId == id)
      .reduce((obj, key) => {
        obj[key] = data[key];
        return obj
      }, {});
    
    return filteredTasks;
  }
}