import { ApiProperty } from '@nestjs/swagger/dist/index.js';
import { Expose } from 'class-transformer';

export class LoggedUserRdo {
    @ApiProperty({
        description: 'Uniq user id',
        example: '4'
    })
    @Expose({name: '_id'})
    public id:string;

    @ApiProperty({
        description: 'Uniq user email',
        example: 'user@user.local'
    })
    @Expose()
    public email: string;
    
    @ApiProperty({
        description: 'Acces token',
        example: 'x-token'
    })
    @Expose()
    public accessToken: string;
}