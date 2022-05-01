import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./screen/dashboard";
import HomePage from "./screen/home-page/home-page";
import Signin from "./screen/sign-in";
import { isSignedIn } from "./utils";

const App = () => {
  const authProtectedRoutes = (screen) => {
    if (isSignedIn()) {
      return screen;
    } else {
      return <Signin />;
    }
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<HomePage />} />
      <Route path="/contact" element={<HomePage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/dashboard" element={authProtectedRoutes(<Dashboard />)} />
    </Routes>
  );
};

export default App;
