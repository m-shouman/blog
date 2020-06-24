import { User } from "../user.entity";

export class UserDto {
    id: number;
    username: string;
    creationDate: Date;

    static create(user: User): UserDto {
        const { password, ...rest } = user;
        return {
            ...rest
        };
    }
}