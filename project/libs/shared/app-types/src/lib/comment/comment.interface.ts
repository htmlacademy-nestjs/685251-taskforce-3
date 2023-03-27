import { User } from "../user/user.interface";

export interface Comment {
    _id?: string;
    taskId: string;
    text: string;
    date: Date;
    author: User;
}