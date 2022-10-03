import * as React from "react";
import Pagination from "@mui/material/Pagination";
import { useNavigate } from "react-router-dom";
import classes from "./PostsPagination.module.scss";

export const PostsPagination = ({ pageId, total }) => {
  const history = useNavigate();

  return (
    <Pagination
      className={classes.pagination}
      onChange={(_, _page) => {
        history(`/${_page}`);
      }}
      count={total}
      page={parseInt(pageId)}
    />
  );
};
