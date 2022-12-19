import React from "react";

// Router
import { NavLink } from "react-router-dom";

// styles
import "./Navbar.scss";

// Const
import { links } from "./const";

export const Navbar: React.FunctionComponent = React.memo(() => {
  const content = links.map((l) => {
    const { href, name } = l;
    return <MakeLink href={href} name={name} />;
  });
  return (
    <nav className={"navbar"}>
      <ul>{content}</ul>
    </nav>
  );
});

export const MakeLink = React.memo(
  ({ href, name }: { href: string; name: string }) => {
    let activeStyle = {
      opacity: 1,
    };

    return (
      <li key={href}>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to={href}
          className={"item"}
        >
          {name}
        </NavLink>
      </li>
    );
  }
);
