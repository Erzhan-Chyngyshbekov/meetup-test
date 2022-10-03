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

const MainPage = () => {
  const { posts, total } = useSelector((state) => state);
  const { fetchPosts } = useActions();
  const { id } = useParams();

  React.useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div style={mainPageStyles}>
      <PostsPagination total={total} pageId={id} />
      <PostsTable posts={posts} pageId={id} />
    </div>
  );
};

export default MainPage;
