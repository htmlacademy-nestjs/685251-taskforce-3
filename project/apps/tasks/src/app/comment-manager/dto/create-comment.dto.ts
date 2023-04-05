import { ApiProperty } from '@nestjs/swagger';
import { User } from '@project/shared/app-types';


export class CreateCommentDto {
    @ApiProperty({
        description: 'Comment text',
        example: 'Great  job!'
      })
    text: string;

    @ApiProperty({
        description: 'UserId',
        example: 'User213132'
      })
    author: User;

}