import { Expose } from "class-transformer";
import { ApiProperty } from '@nestjs/swagger/dist/index.js';

export class CommentRdo {

    @ApiProperty({
        description: 'Uniq comment id',
        example: '4'
    })
    @Expose({ name: '_id'})
    id: string;

    @ApiProperty({
        description: 'Uniq task id',
        example: '24'
    })
    @Expose()
    taskId: string;

    @ApiProperty({
        description: 'Comment text',
        example: 'Great job!'
      })
    @Expose()
    text: string;
    
    @ApiProperty({
        description: 'Task Author',
        example: 'John Smith'
      })
    @Expose()
    author: string;
    
    @ApiProperty({
        description: 'Task created at date',
        example: 'John Smith'
      })
    @Expose()
    date: number;
}