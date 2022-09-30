import * as React from "react";
import Pagination from "@mui/material/Pagination";
import classes from "./PostsPagination.module.scss";

export const PostsPagination = ({ count, page, setPage }) => {
  return (
    <Pagination
      className={classes.pagination}
      onChange={(_, _page) => setPage(_page)}
      count={count}
      page={page}
    />
  );
};
