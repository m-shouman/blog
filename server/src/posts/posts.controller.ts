import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from 'src/users/dto/login.dto';
import { PostsService } from './posts.service';
import { PostDto } from './dto/post.dto';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {

    }

    @Post()
    async create(@Body() createPostDto: CreatePostDto): Promise<PostDto> {
        console.log(JSON.stringify(createPostDto))
        return await this.postsService.create(createPostDto);
    }

    @Get()
    async getAll(): Promise<PostDto[]> {
        const posts = await this.postsService.getAll();
        return posts.map(e => { e.content = null; return e; })
    }

    @Get(":id")
    async getById(@Param('id') id: number): Promise<PostDto> {
        return await this.postsService.getById(id);
    }
}
