import * as React from "react";
import { useSelector } from "react-redux";
import { PostsPagination } from "../components/PostsPagination";
import { PostsTable } from "../components/PostsTable";
import { useActions } from "../hooks/useActions";

const mainPageStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
};

const MainPage = ({ page, setPage }) => {
  const { posts } = useSelector((state) => state);
  const { fetchPosts } = useActions();

  React.useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div style={mainPageStyles}>
      <PostsPagination page={page} setPage={setPage} />
      <PostsTable posts={posts} page={page} />
    </div>
  );
};

export default MainPage;
