import { ApiProperty } from '@nestjs/swagger';
import { User } from '@project/shared/app-types';


export class CreateReviewDto {
    @ApiProperty({
        description: 'Review text',
        example: 'Great  job!, Good worker!'
      })
    text: string;

    @ApiProperty({
        description: 'UserId',
        example: 'User213132'
      })
    author: User;

    @ApiProperty({
        description: 'Rating',
        example: '5'
      })
    rating: number;

}