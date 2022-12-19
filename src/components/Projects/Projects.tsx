import React from "react";

//Router
import { Link } from "react-router-dom";

// Styles
import "./Projects.scss";

// Data
import { IData, projectsConst } from "./const";

export const Projects = React.memo(() => {
  const getMouseMovie = (e: any) => {
    document.body.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px;`;
  };

  React.useEffect(() => {
    document.addEventListener("mousemove", getMouseMovie);

    return () => {
      document.removeEventListener("mousemove", getMouseMovie);
    };
  }, []);

  React.useLayoutEffect(() => {
    let base = document.querySelector(".projects");

    const timeout1 = setTimeout(() => {
      base?.classList.add("projects_animation-show");
    }, 0);

    const timeout2 = setTimeout(() => {
      base?.classList.remove("projects_animation");
      base?.classList.remove("projects_animation-show");
    }, 1600);

    return () => {
      document.removeEventListener("mousemove", getMouseMovie);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  const content = projectsConst.map((project) => {
    return <MakeItemMemo data={project} />;
  });
  return <div className={`projects projects_animation`}>{content}</div>;
});

const MakeItem = ({ data }: { data: IData }) => {
  const { header, img, href, clName } = data;

  return (
    <Link to={href} className="projects__item">
      <div className="projects__header">{header}</div>
      <div className="projects__cursor">
        <div
          className={`image ${clName}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </div>
    </Link>
  );
};

const MakeItemMemo = React.memo(MakeItem);
