import { User } from "../user/user.interface.js";

export interface Review {
    _id?: string;
    taskId?: string;
    text: string;
    rating: number;
    author: User;
    date: Date;
}