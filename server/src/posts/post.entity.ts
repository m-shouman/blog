import { Column, CreateDateColumn, PrimaryGeneratedColumn, Entity, JoinColumn, OneToOne, ManyToOne } from 'typeorm'
import { User } from 'src/users/user.entity';

@Entity("posts")
export class Post {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    content: string;
    @CreateDateColumn({ name: "creation_date" })
    creationDate: Date;
    @ManyToOne(type => User, user => user.posts)
    author: User;
}