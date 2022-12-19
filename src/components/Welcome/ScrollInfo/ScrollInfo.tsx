import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
// styles
import "./ScrollInfo.scss";

const ScrollInfo = () => {
  useLayoutEffect(() => {
    let link = document.querySelector(".scroll-info");
    const timeout1 = setTimeout(() => {
      link?.classList.add("scroll-info_show");
    }, 500);

    return () => {
      clearTimeout(timeout1);
    };
  }, []);

  return (
    <div className="scroll-info">
      <Link className={"scroll-info__link"} to="/projects">
        scroll
      </Link>
      <div className="scroll-info__line">
        <div></div>
      </div>
    </div>
  );
};

export const ScrollInfoMemo = React.memo(ScrollInfo);
