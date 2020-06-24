import { Post } from "../post.entity";

export class PostDto {
    id: number;
    title: string;
    content: string;
    authorId: number;
    author: string;

    creationDate: Date;

    static create(post: Post): PostDto {
        const { id, title, content, creationDate } = post;
        const { username: author = "" } = post.author || {};
        return { id, title, content, author, authorId: post.author ? post.author.id : 0, creationDate }
    }
}