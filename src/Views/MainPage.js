import { CircularProgress } from "@mui/material";
import * as React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PostsPagination } from "../components/PostsPagination";
import { PostsTable } from "../components/PostsTable";
import { useActions } from "../hooks/useActions";

const mainPageStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
};

const loaderStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
};

const MainPage = () => {
  const { posts, total } = useSelector((state) => state);
  const { fetchPosts } = useActions();
  const { id } = useParams();

  React.useEffect(() => {
    fetchPosts();
  }, []);

  return posts.length ? (
    <div style={mainPageStyles}>
      <PostsTable posts={posts} pageId={id} />
      <PostsPagination total={Math.ceil(total / 10)} pageId={id} />
    </div>
  ) : (
    <CircularProgress style={loaderStyles} />
  );
};

export default MainPage;
