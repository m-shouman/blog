import React, { useState } from "react";
import {
  TextField,
  Button,
  Theme,
  makeStyles,
  createStyles,
  Grid,
  Paper,
} from "@material-ui/core";
import { NavLink, Redirect } from "react-router-dom";
import { PostsService } from "../../services/posts.service";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        flexGrow: 1,
      },
      width: "100%",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

export const CreatePost = (props: any) => {
  const classes = useStyles();
  const postsService = new PostsService();

  const [post, setPost] = useState({ title: "", content: "" });
  const [isSaved, setIsSaved] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "post-title") setPost({ ...post, title: value });
    else if (name === "content") setPost({ ...post, content: value });
  };

  const save = async (e: any) => {
    const createdPost = await postsService.create({
      title: post.title,
      content: post.content,
      authorId: 1,
    });

    if (createdPost.id) setIsSaved(true);
  };

  return (
    <>
      {isSaved ? (
        <Redirect to="/home" />
      ) : (
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <TextField
                rows={1}
                fullWidth
                placeholder="Title..."
                variant="filled"
                name="post-title"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
          <Grid container className={classes.root}>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <TextField
                multiline
                placeholder="Content..."
                rows={12}
                fullWidth
                variant="filled"
                name="content"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
          <Grid container justify={"flex-end"}>
            <Grid item xs={2}>
              <NavLink to="/home" style={{ textDecoration: "none" }}>
                <Button variant="contained">Cancel</Button>
              </NavLink>
              <Button variant="contained" color="primary" onClick={save}>
                Save
              </Button>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};
