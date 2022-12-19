import React from "react";

// Styles
import "./Remont.scss";

// Images
import img1 from "../../../assets/images/Remont/1.jpg";
import img2 from "../../../assets/images/Remont/2.jpg";
import img3 from "../../../assets/images/Remont/3.jpg";
import img4 from "../../../assets/images/Remont/4.jpg";
import img5 from "../../../assets/images/Remont/5.jpg";

// Videos
const video1 = require("../../../assets/video/Remont/Preview.mp4");
const video2 = require("../../../assets/video/Remont/projects.mp4");
const video3 = require("../../../assets/video/Remont/mobile.mp4");

export const Remont = React.memo(() => {
  let zSpacing = -1000,
    lastPos = zSpacing / 5,
    $frames: any = null,
    frames: any = null,
    zVals: any = [];

  const handleTransform = () => {
    /**
     * берем значение позиции scrollTop и отнимает от последней позиции top,
     * после чего обновлеям lastPos
     */
    let top = document.documentElement.scrollTop,
      delta = lastPos - top;

    lastPos = top;

    frames.forEach((n: any, i: any) => {
      zVals.push(i * zSpacing + zSpacing);
      // Индекс умножения управляет скоростью пролистывания
      zVals[i] += delta * -5.5;
      let frame = frames[i],
        transform = `translateZ(${zVals[i]}px)`,
        opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
      frame.setAttribute(
        "style",
        `transform: ${transform}; opacity: ${opacity}`
      );
    });
  };

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    $frames = document.getElementsByClassName("frame");
    frames = Array.from($frames);
    // При первом монтировании настраиваем свойство transform у какждого элемента frame
    handleTransform();

    // Слушатель события scroll
    window.addEventListener("scroll", handleTransform, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleTransform);
    };
  }, []);

  return (
    <div className="remont">
      <div className="container">
        <section className="gallery">
          <div className="frame">
            <div className="frame__content">
              <h2>РЕМОНТ ПРОСТО</h2>
            </div>
          </div>
          <div className="frame frame_bg">
            <div className="frame__content">
              <div
                className="frame-media frame-media_left"
                style={{ backgroundImage: `url(${img1})` }}
              ></div>
            </div>
          </div>
          <div className="frame">
            <div className="frame__content text-left">
              <h3>Сайт</h3>
              <p>
                Сайт предоставляет всю необходимую информацию для клиента.
                Предоставляемые услуги, виды работ, этапы взаимодействия, ответы
                на часто задаваемые вопросы, примеры работ с адресами,
                информация о компании, акции и контактные данные.
              </p>
            </div>
          </div>
          <div className="frame frame_bg">
            <div className="frame__content">
              <video
                className="frame-media frame-media_right"
                src={video1}
                autoPlay
                loop
                muted
              ></video>
            </div>
          </div>
          <div className="frame"></div>
          <div className="frame">
            <div className="frame__content">
              <h3>Галерея</h3>
              {/* <p>React, Redux, TypeScript</p> */}
            </div>
          </div>
          <div className="frame frame_bg">
            <div className="frame__content">
              <div
                className="frame-media"
                style={{
                  backgroundImage: `url(${img2})`,
                  backgroundPosition: `0 -280px`,
                }}
              ></div>
            </div>
          </div>
          <div className="frame">
            <div className="frame__content">
              <h3>Примеры работ</h3>
            </div>
          </div>
          <div className="frame frame_bg">
            <div className="frame__content">
              <div
                className="frame-media"
                style={{ backgroundImage: `url(${img3})` }}
              ></div>
            </div>
          </div>
          <div className="frame"></div>
          <div className="frame">
            <div className="frame__content text-left">
              <h3>Адаптивность</h3>
            </div>
          </div>
          <div className="frame frame_bg">
            <div className="frame__content">
              <video
                className="frame-media frame-media_right"
                src={video3}
                autoPlay
                muted
                loop
              ></video>
            </div>
          </div>
          <div className="frame">
            <div className="frame__content">
              <video
                className="frame-media"
                src={video2}
                autoPlay
                muted
                loop
              ></video>
            </div>
          </div>
          <div className="frame">
            <div className="frame__content">
              <p>DmDeveloper</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
});
