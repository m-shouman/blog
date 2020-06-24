import { Post } from "../post.entity";
import { User } from "src/users/user.entity";

export class CreatePostDto {
    title: string;
    content: string;
    authorId: number;

    static toPost(dto: CreatePostDto): Post {
        const { title, content, authorId } = dto;
        const post = new Post();
        post.author = new User();
        post.author.id = authorId;
        post.title = title;
        post.content = content;
        return post;
    }
}