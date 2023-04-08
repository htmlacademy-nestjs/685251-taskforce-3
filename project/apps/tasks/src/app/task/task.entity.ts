import { Task, TaskCity, TaskStatus } from '@project/shared/app-types'

export class TaskEntity implements Task {
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
    date?: Date;
    status: TaskStatus;

    constructor(task: Task) {
        this.fillEntity(task)
    }

    public toObject() {
        return {...this};
    }

    fillEntity(task: Task) {
        this._id = task._id;
        this.title = task.title;
        this.description = task.description;
        this.category = task.category;
        this.price = task.price;
        this.deadline = task.deadline;
        this.image = task.image;
        this.adress = task.adress;
        this.tag = task.tag
        this.city = task.city;
        this.author = task.author;
        this.date = task.date;
        this.status = task.status;
    }

}