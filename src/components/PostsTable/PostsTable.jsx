import * as React from "react";
import classes from "./PostsTable.module.scss";
import { useActions } from "../../hooks/useActions";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export function PostsTable({ posts, pageId }) {
  const { reversePosts } = useActions();

  const handleReversePosts = () => {
    reversePosts(posts);
  };

  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <button
                className={classes.button}
                onClick={() => handleReversePosts()}
              >
                id
              </button>
            </TableCell>
            <TableCell align="right">userId</TableCell>
            <TableCell align="right">title</TableCell>
            <TableCell align="right">
              <button className={classes.button}>body</button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post) =>
            post.id <= pageId * 10 && post.id > pageId * 10 - 10 ? (
              <TableRow
                key={post.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {post.id}
                </TableCell>
                <TableCell align="right">{post.userId}</TableCell>
                <TableCell align="right">{post.title}</TableCell>
                <TableCell align="right">{post.body}</TableCell>
              </TableRow>
            ) : null
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
