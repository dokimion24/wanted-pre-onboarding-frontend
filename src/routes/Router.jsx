import React from "react";
import { Route, Routes } from "react-router-dom";
import SigninPage from "../page/SigninPage";
import SignupPage from "../page/SignupPage";
import TodoPage from "../page/Todo";
import Layout from "../components/Common/Layout";
import PrivateRoute from "./PrivateRoute";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/todo" element={<TodoPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Router;
