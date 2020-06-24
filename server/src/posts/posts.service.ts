import { Injectable } from '@nestjs/common';
import { PostDto } from './dto/post.dto';
import { CreatePostDto } from './dto/create-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { User } from 'src/users/user.entity';

@Injectable()
export class PostsService {

    constructor(
        @InjectRepository(Post)
        private postsRepository: Repository<Post>,
        @InjectRepository(User)
        private usersRepository: Repository<User>) { }

    async getAll(): Promise<PostDto[]> {
        const posts = await this.postsRepository.find({
            relations: ["author"]
        });
        console.log(JSON.stringify(posts[0].author));
        return posts.map(e => PostDto.create(e));
    }

    async getById(id: number): Promise<PostDto> {
        const post = await this.postsRepository.findOne(id, {
            relations: ["author"]
        });
        return PostDto.create(post);
    }

    async create(dto: CreatePostDto): Promise<PostDto> {
        const post = this.postsRepository.create(dto);
        post.author = await this.usersRepository.findOne({ id: dto.authorId });
        const createdPost = await this.postsRepository.save(post);
        return PostDto.create(createdPost);
    }
}
