import React from "react";
import { Route, Routes } from "react-router-dom";
import SigninPage from "../page/SigninPage";
import SignupPage from "../page/SignupPage";
import TodoPage from "../page/Todo";

function Router() {
  return (
    <Routes>
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/todo" element={<TodoPage />} />
    </Routes>
  );
}

export default Router;
