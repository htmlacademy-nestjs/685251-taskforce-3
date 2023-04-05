import { CommentMemoryRepository } from "../comment/comment-memory.repository";
import { CreateCommentDto } from "./dto/create-comment.dto";
import dayjs from 'dayjs';
import { CommentEntity } from "../comment/comment.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CommentManagerService {
    constructor (
        private readonly commentRepository: CommentMemoryRepository
    ) {}

    private prepareEntity (dto: CreateCommentDto) {
        const {text,author} = dto;

        const comment = {
            text,
            author, //TODO связать с микросервисом users
            date: dayjs(Date.now()).toDate(),
        }

        return new CommentEntity(comment);
    }

    public async createCommentByTaskId (taskId: string, dto: CreateCommentDto) {
        const entityWithTaskId = await this.commentRepository.createByTaskId(taskId, this.prepareEntity(dto))
        return entityWithTaskId
    }


    public async updateComment (id: string, dto: CreateCommentDto) {
        return this.commentRepository.update(id, this.prepareEntity(dto));
        
    }

    public async getComment (id: string) {
        return this.commentRepository.findById(id);
    }

    public async show () {
        return this.commentRepository.show();
    }

    public async deleteComment(id: string): Promise<void> {
        await this.commentRepository.destroy(id);
    }
    
    public async showCommentsByTaskId (id: string) {
        return this.commentRepository.showByTaskId(id);
        
    }
    

    
}