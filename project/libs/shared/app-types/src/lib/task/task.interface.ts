import { TaskCity } from "./task-city.enum";
import { TaskStatus } from "./task-status.enum";

export interface Task {
    _id?: string;
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
    date: Date;
    status: TaskStatus;
}