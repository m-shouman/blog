import React from "react";
import { CreatePost } from "./pages/CreatePost";
import "./App.css";
import { Posts } from "./pages/Posts";
import { Header } from "./components/Header";
import { Router, BrowserRouter, Switch, Route } from "react-router-dom";
import { Post, PostProps } from "./pages/Post";
import { Grid } from "@material-ui/core";
import { StateProvider } from "./state/StateProvider";

function App() {
  return (
    <StateProvider>
      <BrowserRouter>
        <Header />
        <Grid container style={{ paddingTop: 80 }} justify="center">
          <Switch>
            <Route exact path={["/", "/home", "/index"]} component={Posts} />
            <Route exact path="/create-post" component={CreatePost} />
            <Route
              exact
              path="/post/:id"
              render={(props: any) => {
                return <Post postId={props.match.params.id} />;
              }}
            />
          </Switch>
        </Grid>
      </BrowserRouter>
    </StateProvider>
  );
}

export default App;
