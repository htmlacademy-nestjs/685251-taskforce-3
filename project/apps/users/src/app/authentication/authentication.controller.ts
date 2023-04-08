import { Controller, HttpStatus } from '@nestjs/common';
import { Post, Get } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { AuthenticationService } from './authentication.service';
import { CreateUserDto } from './dto/create-user.dto';
import { fillObject } from '@project/util/util-core'
import { UserRdo } from './rdo/user.rdo';
import { LoginUserDto } from './dto/login-user.dto';
import { LoggedUserRdo } from './rdo/logged-user.rdo';
import { ApiResponse, ApiTags } from '@nestjs/swagger/dist/index.js';
import { HttpCode } from '@nestjs/common/decorators/index.js';

@ApiTags('authentication')
@Controller('auth')
export class AuthenticationController {
    constructor(
        private readonly authService: AuthenticationService
    ) {}

    @ApiResponse({
        status: HttpStatus.CREATED,
        description: 'New user created'
    })
    @Post('register')
    public async create(@Body() dto: CreateUserDto) {
        const newUser = await this.authService.register(dto);
        return fillObject(UserRdo, newUser);
    }

    @ApiResponse({
        type: LoggedUserRdo,
        status: HttpStatus.OK,
        description: 'User logged',
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: 'Password or login is wrong',
    })
    @Post('login')
    @HttpCode(HttpStatus.OK)
    public async login(@Body() dto:LoginUserDto) {
        const verifiedUser = await this.authService.verifyUser(dto);
        return fillObject(LoggedUserRdo, verifiedUser);
    }
    
    @ApiResponse({
        type: UserRdo,
        status: HttpStatus.OK,
        description: 'User found'
    })
    @Get(':id')
    public async show(@Param('id') id: string) {
        const existsUser = await this.authService.getUser(id);
        return fillObject(UserRdo, existsUser);
    }
}
