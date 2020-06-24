import React, { useEffect } from "react";

export type PostProps = {
  postId: number;
};

export const Post = (props: PostProps) => {
  useEffect(() => {
    alert(props.postId);
  });
  return (
    <>
      <div style={{ margin: 100 }}>{props.postId}</div>
    </>
  );
};
