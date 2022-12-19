import React from "react";

// styles
import "./Header.scss";

// components
import { Navbar } from "./Navbar/Navbar";

export const Header: React.FunctionComponent = React.memo(() => {
  return (
    <header className={"header"}>
      <Navbar />
    </header>
  );
});
