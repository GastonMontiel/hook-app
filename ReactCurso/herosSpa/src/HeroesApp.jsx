import React from "react";
import { AuthProvider } from "./auth/context/AuthContext";
import { AppRouter } from "./router/AppRouter";

const HeroesApp = () => (
  <AuthProvider>
    <AppRouter />
  </AuthProvider>
);

export default HeroesApp;
