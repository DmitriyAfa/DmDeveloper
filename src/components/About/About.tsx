import React from "react";

//Router
import { Link } from "react-router-dom";

// Styles
import "./About.scss";

// Images
// *** Header images
import baseImg from "../../assets/images/About/1.jpg";
import topImg from "../../assets/images/About/layer-top.png";
import middleImg from "../../assets/images/About/23.png";
import frontImg from "../../assets/images/About/layer-front.png";
// *** Article image
import dungeonImg from "../../assets/images/About/dungeon.jpg";

export const About = React.memo(() => {
  const handleScroll = () => {
    const position = window.pageYOffset;
    document.body.style.cssText += `--scrollTop: ${position}px`;
  };

  // useLayoutEffect запускается сразу ПОСЛЕ того, как React выполнил все изменения DOM
  React.useLayoutEffect(() => {
    let base = document.querySelector(".layers__base");
    let top = document.querySelector(".layers__top");
    let front = document.querySelector(".layers__front");
    let middle = document.querySelector(".layers__middle");
    const timeout1 = setTimeout(() => {
      base?.classList.add("layers__base_show");
      top?.classList.add("layers__top_show");
      middle?.classList.add("layers__middle_show");
      front?.classList.add("layers__front_show");
    }, 0);
    const timeout2 = setTimeout(() => {
      front?.classList.remove("layers__front_start");
      front?.classList.remove("layers__front_show");
    }, 1850);
    const timeout3 = setTimeout(() => {
      middle?.classList.remove("layers__middle_start");
      middle?.classList.remove("layers__middle_show");
    }, 2600);
    const timeout4 = setTimeout(() => {
      base?.classList.remove("layers__base_start");
      base?.classList.remove("layers__base_show");
    }, 3600);
    const timeout5 = setTimeout(() => {
      top?.classList.remove("layers__top_start");
      top?.classList.remove("layers__top_show");
    }, 4700);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
      clearTimeout(timeout5);
    };
  }, []);

  return (
    <div className="about">
      <header className="main-header">
        <div className="layers">
          <div className="layer__header">
            <div className="layers__caption">
              Сreated by <span> ©DmDeveloper</span>
            </div>
            <div className="layers__title"> Welcome !</div>
          </div>
          <div
            className="layer layers__base layers__base_start"
            style={{ backgroundImage: `url(${baseImg})` }}
          ></div>
          <div
            className="layer layers__top layers__top_start"
            style={{ backgroundImage: `url(${topImg})` }}
          ></div>
          <div
            className="layer layers__middle layers__middle_start"
            style={{ backgroundImage: `url(${middleImg})` }}
          ></div>
          <div
            className="layer layers__front layers__front_start"
            style={{ backgroundImage: `url(${frontImg})` }}
          ></div>
        </div>
      </header>

      <article
        className="main-article"
        style={{ backgroundImage: `url(${dungeonImg})` }}
      >
        <div className="main-article__content">
          <h2 className="main-article__header">Немного обо мне</h2>
          <p className="main-article__paragraph">
            Меня зовут Дмитрий, мне 26 лет. По образованию логист. Работал ...
            так стоп, совсем не туда :) Немного о том, как стал{" "}
            <span>frontend</span> разработчиком. Как-то из чистого интереса
            попробовал сделать "сайт". Не заметил как затянуло и через месяцев
            7-8 попалась реклама яндекс.практикума. Я увидел курс по{" "}
            <span>React</span> и загорелся. Курс для "продвинутых", но я уже не
            плохо знал верстку и немного JS. Три месяца в бешеном темпе я пахал,
            закрывал море пробелов, видел сны как пишу код (там он всегда
            работал с первого раза). И наконец в июле 2022 сдал проект и получил
            корочку о том, что я <span>React-разработчик</span>. Сейчас я
            продолжаю развиваться как fronend разработчик: изучаю архитектуры
            приложений, знакомлюсь с backend <span>node.js, express.js</span>,
            знакомлюсь с базами данных <span>postgresql, mongoDB</span>, и,
            конечно же, углубляю свои навыки в <span>frontend</span>. Много
            практикуюсь. Я сделаю для вас проекты на{" "}
            <span>React, TypeScript и Redux (или MobX)</span>, так же проекты на{" "}
            <span>HTML+CSS+JS</span>.
          </p>
        </div>
        <div className="copy">© DmDeveloper</div>
      </article>
    </div>
  );
});
