import { Expose } from "class-transformer";
import { ApiProperty } from '@nestjs/swagger/dist/index.js';

export class ReviewRdo {

    @ApiProperty({
        description: 'Uniq review id',
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
        description: 'Review text',
        example: 'Great job! Good worker!'
      })
    @Expose()
    text: string;
    
    @ApiProperty({
        description: 'Review Author',
        example: 'John Smith'
      })
    @Expose()
    author: string;
    
    @ApiProperty({
        description: 'Review created at date',
        example: 'John Smith'
      })
    @Expose()
    date: Date;

    @ApiProperty({
        description: 'Review rating',
        example: '5'
      })
    @Expose()
    rating: number;
}