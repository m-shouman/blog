import { Controller, Post, Body } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post("login")
    async login(@Body() loginDto: LoginDto): Promise<{ accessToken: string }> {
        return { accessToken: await this.usersService.login(loginDto) };
    }
}
