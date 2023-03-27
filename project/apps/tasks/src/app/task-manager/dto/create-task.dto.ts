import { TaskCity } from "@project/shared/app-types";

export class CreateTaskDto {
    title: string;
    description: string;
    category: string;
    price?: number;
    deadline?: string;
    image?: string;
    adress?: string;
    tag?: string;
    city: TaskCity;
    author: string;

}