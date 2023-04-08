import { Review, User } from '@project/shared/app-types'

export class ReviewEntity implements Review {
    _id?: string;
    taskId: string;
    text: string;
    author: User;
    date: Date;
    rating: number;

    constructor(review: Review) {
        this.fillEntity(review)
    }

    public toObject() {
        return {...this};
    }

    fillEntity(review: Review) {
        this._id = review._id;
        this.taskId = review.taskId;
        this.text = review.text;
        this.author = review.author;
        this.date = review.date;
        this.rating = review.rating;
    }

}