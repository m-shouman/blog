import { Column, CreateDateColumn, PrimaryGeneratedColumn, Unique, Entity, OneToMany } from 'typeorm'
import { Post } from 'src/posts/post.entity';

@Unique("unique_username", ["username"])
@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    username: string;
    @Column()
    password: string;
    @CreateDateColumn({ name: "creation_date" })
    creationDate: Date;
    @OneToMany(type => Post, post => post.author)
    posts:Post[];
}