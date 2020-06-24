import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { sign, verify } from 'jsonwebtoken'

@Injectable()
export class UsersService {
    private readonly jwtSecret: string;

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {
        this.jwtSecret = process.env.JWT_SECRET;
    }

    async login(loginDto: LoginDto): Promise<string> {
        const user = await this.userRepository.findOne({
            where: { username: loginDto.username, password: loginDto.password }
        });

        if (!user)
            throw new UnauthorizedException();

        const accessToken = sign({
            sub: user.id,
            name: user.username
        }, this.jwtSecret, {
            expiresIn: "7d"
        });

        return accessToken;
    }
}
