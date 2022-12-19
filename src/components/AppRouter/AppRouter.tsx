import React from "react";

// Router
import { Routes, Route, useLocation } from "react-router-dom";

// components
import { App } from "../App/App";
import { About } from "../About/About";
import { Projects } from "../Projects/Projects";
import { Remont } from "../Projects/Remont/Remont";
import { Stellar } from "../Projects/Stellar/Stellar";
import { Welcome } from "../Welcome/Welcome";

export const AppRouter: React.FunctionComponent = React.memo(() => {
  const location = useLocation();
  return (
    <>
      <Routes location={location}>
        <Route path="/" element={<App />}>
          <Route index element={<Welcome />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/about" element={<About />} />

          <Route path="/stellar" element={<Stellar />} />

          <Route path="/remont" element={<Remont />} />

          {/* <Route
            path="profile/*"
            element={<ProtectedRoute outlet={<ProfileContent />} />}
          />
          <Route path="feed" element={<Feed />} />

          <Route path="login" element={<AuthRoute outlet={<Login />} />} />
          <Route
            path="register"
            element={<AuthRoute outlet={<Registration />} />}
          />
          <Route
            path="forgot-password"
            element={<AuthRoute outlet={<ForgotPassword />} />}
          />
          <Route path="reset-password" element={<ResetPassword />} /> */}
        </Route>
      </Routes>
    </>
  );
});
