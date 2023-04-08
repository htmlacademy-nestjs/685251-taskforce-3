import { ApiProperty } from '@nestjs/swagger/dist/index.js';
import { Expose } from 'class-transformer';

export class UserRdo {
    @ApiProperty({
        description: 'Uniq user id',
        example: '4'
    })
    @Expose({ name: '_id'})
    public id: string;

    @ApiProperty({
        description: 'user avatar path',
        example: '/images/avatar.jpg'
    })
    @Expose()
    public avatar: string;
    
    @ApiProperty({
        description: 'User birth date(ISO)',
        example: '1990-02-10'
    })
    @Expose()
    public dateBirth: string;
    
    @ApiProperty({
        description: 'Uniq user email',
        example: 'user@user.local'
    })
    @Expose()
    public email: string;

    @ApiProperty({
        description: 'User first name',
        example: 'Vlad'
    })
    @Expose()
    public firstname: string;
    
    @ApiProperty({
        description: 'User last name',
        example: 'Kotov'
    })
    @Expose()
    public lastname: string;
}