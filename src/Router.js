import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Views/MainPage";

export const Router = () => {
  const [page, setPage] = React.useState(1);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage page={page} setPage={setPage} />} />
      </Routes>
    </BrowserRouter>
  );
};
