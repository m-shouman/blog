export class PostDto {
    id: number;
    title: string;
    content: string;
    authorId: number;
    author: string;
    img?: string;
    creationDate: Date;
}