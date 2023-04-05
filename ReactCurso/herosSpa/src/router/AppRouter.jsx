import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { HerosRoutes } from "../heroes/routes/HerosRoutes";
import { PrivateRouter } from "./PrivateRouter";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />

        <Route
          path="/*"
          element={
            <PrivateRouter>
              <HerosRoutes />
            </PrivateRouter>
          }
        />
      </Routes>
    </>
  );
};
