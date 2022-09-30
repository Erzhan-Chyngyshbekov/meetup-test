import * as React from "react";
import { PostsPagination } from "../components/PostsPagination";
import { PostsTable } from "../components/PostsTable";
import { storeContext } from "../Context/StoreContext";

const mainPageStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
};

const MainPage = ({ page, setPage }) => {
  const { posts, fetchPosts, total } = React.useContext(storeContext);
  //   const [page, setPage] = React.useState(1);
  React.useEffect(() => {
    fetchPosts(page - 1);
  }, [page]);

  return (
    <div style={mainPageStyles}>
      <PostsPagination
        page={page}
        setPage={setPage}
        count={Math.ceil(total / 10)}
      />
      <PostsTable posts={posts} />
    </div>
  );
};

export default MainPage;
