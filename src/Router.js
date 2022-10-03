import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Views/MainPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};
