import { Service } from "./service";
import { PostDto } from "./dto/post.dto";
import { CreatePostDto } from "./dto/create-post.dto";

export class PostsService extends Service {
    controller: string = "posts";

    async getAll(): Promise<PostDto[]> {
        const response = await fetch(this.url());
        if (response.ok) {
            const posts = await response.json() as PostDto[];
            posts.map(e => {
                e.img = e.img || "/images/post-img.jpg";
                e.author = e.author || "Mostafa";
                return e;
            })
            return posts;
        }
        throw new Error("failed to retrieve posts");
    }

    async getOne(id: number): Promise<PostDto> {
        const response = await fetch(this.url("", `/${id}`));
        if (response.ok)
            return await response.json();
        throw new Error(`failed to retrieve post with id ${id}`);
    }

    async create(createPostDto: CreatePostDto): Promise<PostDto> {
        const response = await fetch(this.url(), {
            body: JSON.stringify(createPostDto), method: "POST", headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        if (response.ok)
            return await response.json();

        throw new Error(`failed to create post`);
    }
}