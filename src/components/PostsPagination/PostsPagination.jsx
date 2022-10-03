import * as React from "react";
import Pagination from "@mui/material/Pagination";
import { useNavigate } from "react-router-dom";
import classes from "./PostsPagination.module.scss";

export const PostsPagination = ({ setPage, pageId }) => {
  const history = useNavigate();

  return (
    <Pagination
      className={classes.pagination}
      onChange={(_, _page) => {
        setPage(_page);
        history(`/${_page}`);
      }}
      count={10}
      page={pageId}
    />
  );
};
