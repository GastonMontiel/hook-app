import { Link, Navigate, Route, Routes } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";

export const MainApp = () => {
  return (
    <>
      <h1>MainApp</h1>
      <Link to="about">About</Link>
      <Link to="login">Login</Link>
      <Link to="/">Home</Link>
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes>
    </>
  );
};
