import React from "react";

// Styles
import "./Stellar.scss";

// Images
import img1 from "../../../assets/images/Stellar/1.jpg";
import img2 from "../../../assets/images/Stellar/2.jpg";
import img3 from "../../../assets/images/Stellar/3.png";
import img4 from "../../../assets/images/Stellar/4.png";

// Videos
const video1 = require("../../../assets/video/Stellar/SB-PREVIEW.mp4");
const video2 = require("../../../assets/video/Stellar/SB-MOBILE.mp4");

export const Stellar = React.memo(() => {
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
    <div className="stellar">
      <div className="container">
        <section className="gallery">
          <div className="frame">
            <div className="frame__content">
              <h2>Stellar burgers</h2>
            </div>
          </div>
          <div className="frame">
            <div className="frame__content">
              <div
                className="frame-media frame-media_left"
                style={{ backgroundImage: `url(${img1})` }}
              ></div>
            </div>
          </div>
          <div className="frame">
            <div className="frame__content text-left">
              <h3>Звёздная бургерная</h3>
              <p>
                Позволяет собрать свой бургер. Бургер можно собрать из булки,
                ингредиениов и соусов. О каждом ингредиенте можно узнать
                подробнее. Что бы оформить заказ нужно зайти в свой аккаунт.
                Аккаунт можно зарегестрировать на сайте. Можно посмотреть общую
                историю заказов и индивидуальную историю.
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
            <div className="frame__content text-right">
              <h3>React, Redux, TypeScript</h3>
              {/* <p>React, Redux, TypeScript</p> */}
            </div>
          </div>
          <div className="frame frame_bg">
            <div className="frame__content">
              <div
                className="frame-media frame-media_left"
                style={{ backgroundImage: `url(${img2})` }}
              ></div>
            </div>
          </div>
          <div className="frame">
            <div className="frame__content text-left">
              <h3>Responsive</h3>
              <p>Адаптация сайта под разные разрешения</p>
            </div>
          </div>
          <div className="frame frame_bg">
            <div className="frame__content">
              <div
                className="frame-media frame-media_right"
                style={{ backgroundImage: `url(${img3})` }}
              ></div>
            </div>
          </div>
          <div className="frame"></div>
          <div className="frame">
            <div className="frame__content text-left">
              <h3>Функционал сайта</h3>
              <p>
                Добавление и сортировка ингредиентов (Drag & Drop). Демонстрация
                различной информации в модальном окне (popup). Создание и
                получение заказа (взаимодействие с backend API). Аутентификации
                по jwt токену: регистрация, восстановление утерянного пароля,
                авторизация, защищенный роутинг. WebSocket - получение ленты
                заказов.
              </p>
            </div>
          </div>
          <div className="frame frame_bg">
            <div className="frame__content">
              <div
                className="frame-media frame-media_right"
                style={{ backgroundImage: `url(${img4})` }}
              ></div>
            </div>
          </div>
          <div className="frame">
            <div className="frame__content">
              <video
                className="frame-media frame-media_left"
                src={video2}
                autoPlay
                muted
                loop
              ></video>
            </div>
          </div>
          <div className="frame frame_bg"></div>
          <div className="frame">
            <h2>Stellar burgers</h2>
          </div>
          <div className="frame frame_bg"></div>
          <div className="frame frame_bg">
            <div className="frame__content">
              <video
                className="frame-media"
                src={video1}
                autoPlay
                loop
                muted
              ></video>
            </div>
          </div>
          <div className="frame"></div>
          <div className="frame frame_bg">
            <div className="frame__content">DmDeveloper</div>
          </div>
        </section>
      </div>
    </div>
  );
});
