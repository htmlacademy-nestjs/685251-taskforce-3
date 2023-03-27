import { User, UserRole } from '@project/shared/app-types'
import { hash, genSalt, compare } from 'bcrypt';
import { SALT_ROUNDS } from './blog-user.constant';

export class BlogUserEntity implements User {
    public _id?: string;
    public email: string;
    public firstname: string;
    public lastname: string;
    public dateBirth: Date;
    public avatar: string;
    public passwordHash: string;
    public role: UserRole;

    constructor(blogUser: User) {
        this.fillEntity(blogUser)
    }

    public toObject() {
        return {...this};
    }

    fillEntity(blogUser: User) {
        this._id = blogUser._id;
        this.email = blogUser.email;
        this.firstname = blogUser.firstname;
        this.lastname = blogUser.lastname;
        this.dateBirth = blogUser.dateBirth;
        this.avatar = blogUser.avatar;
        this.passwordHash = blogUser.passwordHash;
        this.role =  blogUser.role;
    }

    public async setPassword(password: string):Promise<BlogUserEntity> {
        const salt = await genSalt(SALT_ROUNDS);
        this.passwordHash = await hash(password, salt);
        return this;
    }

    public async comparePassword(password:string): Promise<boolean> {
        return compare(password, this.passwordHash);
    }
}
