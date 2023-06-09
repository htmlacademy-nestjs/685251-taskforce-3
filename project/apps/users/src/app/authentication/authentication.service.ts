import { ConflictException, Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';
import { UnauthorizedException } from '@nestjs/common/exceptions/unauthorized.exception';
import { UserRole } from '@project/shared/app-types';
import dayjs from 'dayjs';
import { BlogUserMemoryRepository } from '../blog-user/blog-user-memory.repository';
import { BlogUserEntity } from '../blog-user/blog-user.entity';
import { AUTH_USER_EXISTS, AUTH_USER_NOT_FOUND, AUTH_USER_PASSWORD_WRONG } from './authentication.constant';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthenticationService {
    constructor (
        private readonly blogUserRepository: BlogUserMemoryRepository
        ) {}
    
    public async register (dto: CreateUserDto) {
        const {email, firstname, lastname, dateBirth, password} = dto;

        const blogUser = {email, firstname, lastname, 
            role: UserRole.Customer, avatar: '', 
            dateBirth: dayjs(dateBirth).toDate(), passwordHash: ''};

        const existUser = await this.blogUserRepository.findByEmail(email);

        if (existUser) {
            throw new  ConflictException(AUTH_USER_EXISTS);
        }

        const userEntity = await new BlogUserEntity(blogUser)
            .setPassword(password)

        return this.blogUserRepository
            .create(userEntity)
    }

    public async verifyUser (dto: LoginUserDto) {
        const {email, password} =  dto;
        const existUser = await  this.blogUserRepository.findByEmail(email);

        if (!existUser) {
            throw new NotFoundException(AUTH_USER_NOT_FOUND);
        }

        const blogUserEntity = new BlogUserEntity(existUser);
        if (!await blogUserEntity.comparePassword(password)) {
            throw new UnauthorizedException(AUTH_USER_PASSWORD_WRONG);
        }

        return blogUserEntity.toObject();
    }

    public async getUser(id: string) {
        return this.blogUserRepository.findById(id);
    }
}
