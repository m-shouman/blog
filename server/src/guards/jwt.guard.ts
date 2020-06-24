import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { verify } from 'jsonwebtoken';

@Injectable()
export class JwtGuard implements CanActivate {
    private readonly jwtSecret: string;

    constructor() {
        this.jwtSecret = process.env.JWT_SECRET;
    }

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        const { authorization } = request.headers;
        const token = authorization.substring(authorization.indexOf(" ") + 1);
        const payload = this.verifyToken(token);

        if (payload) {
            request.userId = payload.sub;
            return true;
        }
    }

    private verifyToken(token: string): any {
        return verify(token, this.jwtSecret);
    }
}