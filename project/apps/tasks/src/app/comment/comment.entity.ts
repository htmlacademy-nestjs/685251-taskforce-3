import { Comment, User } from '@project/shared/app-types'

export class CommentEntity implements Comment {
    _id?: string;
    taskId?: string;
    text: string;
    author?: User;
    date: Date;

    constructor(comment: Comment) {
        this.fillEntity(comment)
    }

    public toObject() {
        return {...this};
    }

    fillEntity(comment: Comment) {
        this._id = comment._id;
        this.taskId = comment.taskId;
        this.text = comment.text;
        this.author = comment.author;
        this.date = comment.date;
    }

}