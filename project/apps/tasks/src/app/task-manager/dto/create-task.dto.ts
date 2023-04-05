import { TaskCity } from "@project/shared/app-types";
import { ApiProperty } from '@nestjs/swagger';


export class CreateTaskDto {
    @ApiProperty({
        description: 'Task title',
        example: 'Clean up work'
      })
    title: string;

    @ApiProperty({
        description: 'Task description',
        example: 'We need you to clean our household and garage.'
      })
    description: string;

    @ApiProperty({
        description: 'Task unique category',
        example: 'Cleaning'
      })
    category: string;

    @ApiProperty({
        description: 'Task price',
        example: '1000'
      })
    price?: number;

    @ApiProperty({
        description: 'Task deadline',
        example: '23-04-2023'
      })
    deadline?: string;

    @ApiProperty({
        description: 'Task image',
        example: './image.jpg'
      })
    image?: string;

    @ApiProperty({
        description: 'Task unique address',
        example: 'RiverSide street 333'
      })
    adress?: string;

    @ApiProperty({
        description: 'Task tags (up to 5)',
        example: 'cleaning, fast, goodpay'
      })
    tag?: string;

    @ApiProperty({
        description: 'Task City',
        example: 'Moscow'
      })
    city: TaskCity;

    @ApiProperty({
        description: 'Task Author',
        example: 'John Smith'
      })
    author: string;

}