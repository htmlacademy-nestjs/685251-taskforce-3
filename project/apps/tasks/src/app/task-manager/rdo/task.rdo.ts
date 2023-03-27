import { TaskCity, TaskStatus } from "@project/shared/app-types";
import { Expose } from "class-transformer";

export class TaskRdo {

    @Expose({ name: '_id'})
    id: string;

    @Expose()
    title: string;

    @Expose()
    description: string;
    
    @Expose()
    category: string;
    
    @Expose()
    price: number;
    
    @Expose()
    deadline: string;
    
    @Expose()
    image: string;

    @Expose()
    adress: string;

    @Expose()
    tag: string;
    
    @Expose()
    city: TaskCity;
    
    @Expose()
    author: string;
    
    @Expose()
    status: TaskStatus;
    
    @Expose()
    date: Date;
}