import { TaskCity, TaskStatus } from "@project/shared/app-types";
import { Expose } from "class-transformer";
import { ApiProperty } from '@nestjs/swagger/dist/index.js';


export class TaskRdo {
    @ApiProperty({
        description: 'Uniq task id',
        example: '4'
    })
    @Expose({ name: '_id'})
    id: string;
    
    @ApiProperty({
        description: 'Task title',
        example: 'Clean up work'
      })
    @Expose()
    title: string;
    
    @ApiProperty({
        description: 'Task description',
        example: 'We need you to clean our household and garage.'
      })
    @Expose()
    description: string;

    @ApiProperty({
        description: 'Task unique category',
        example: 'Cleaning'
      })
    @Expose()
    category: string;
    
    @ApiProperty({
        description: 'Task price',
        example: '1000'
      })
    @Expose()
    price: number;
    
    @ApiProperty({
        description: 'Task deadline',
        example: '23-04-2023'
      })
    @Expose()
    deadline: string;
    
    @ApiProperty({
        description: 'Task image',
        example: './image.jpg'
      })
    @Expose()
    image: string;
    
    @ApiProperty({
        description: 'Task unique address',
        example: 'RiverSide street 333'
      })
    @Expose()
    adress: string;
    
    @ApiProperty({
        description: 'Task tags (up to 5)',
        example: 'cleaning, fast, goodpay'
      })
    @Expose()
    tag: string;
    
    @ApiProperty({
        description: 'Task City',
        example: 'Moscow'
      })
    @Expose()
    city: TaskCity;
    
    @ApiProperty({
        description: 'Task Author',
        example: 'John Smith'
      })
    @Expose()
    author: string;
    
    @ApiProperty({
        description: 'Task Status',
        example: 'Новое'
      })
    @Expose()
    status: TaskStatus;

    @ApiProperty({
        description: 'Task created at date',
        example: 'John Smith'
      })
    @Expose()
    date: Date;
}