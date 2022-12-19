import React from "react";

//Router
import { Outlet } from "react-router-dom";

// Styles
import "./App.scss";

// Components
import { Header } from "./Header/Header";

export const App: React.FunctionComponent = React.memo(() => {
  return (
    <div className={`app`}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
});
