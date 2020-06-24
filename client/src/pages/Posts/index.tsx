import React, { useState, useEffect } from "react";
import {
  GridList,
  createStyles,
  makeStyles,
  Theme,
  GridListTile,
  GridListTileBar,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { PostsService } from "../../services/posts.service";
import { PostDto } from "../../services/dto/post.dto";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      // width: "50%",
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)",
    },
    tileBar: {
      cursor: "pointer",
    },
  })
);

export const Posts = (props: any) => {
  const classes = useStyles();
  const postsService = new PostsService();
  const data: PostDto[] = [];
  const [posts, setPosts] = useState(data);

  useEffect(() => {
    postsService.getAll().then((fetchedPosts) => {
      setPosts(fetchedPosts);
      console.log(fetchedPosts);
    });
  }, []);

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList} cols={1}>
        {posts.map((post) => (
          <GridListTile
            key={post.id}
            component={NavLink}
            to={"/post/" + post.id}
          >
            <img src={post.img} alt={post.title} />
            <GridListTileBar
              className={classes.tileBar}
              title={post.title}
              subtitle={<span>by: {post.author}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
